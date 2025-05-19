"use client";

import { useState, useEffect, useRef, useCallback } from "react";

import {
  makeStyles,
  SearchBox,
  CommandBar,
  ICommandBarItemProps,
  ISearchBoxStyles,
  Callout,
  DirectionalHint,
  FocusZone,
  List,
  Image,
  ImageFit,
  PersonaCoin,
  Stack,
  Text,
  mergeStyleSets,
} from "@fluentui/react";

import { Dish } from "../types";
import { useRouter } from "next/navigation";
const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: theme.effects.elevation16,
    backgroundColor: theme.palette.white,
    position: "sticky",
    top: 0,
    zIndex: 10,
    padding: "16px",
  },
  titleContainer: {
    padding: 16,
  },
  searchContainer: {
    width: "100%",
    maxWidth: 400,
    margin: "0 auto",
    position: "relative",
  },
  searchBox: {
    width: "100%",
  },
  suggestionsContainer: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: theme.palette.white,
    borderRadius: theme.effects.roundedCorner2,
    boxShadow: theme.effects.elevation8,
    maxHeight: 400,
    overflowY: "auto",
  },
  suggestionItem: {
    padding: "12px 16px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      backgroundColor: theme.palette.neutralLighter,
    },
  },
  suggestionImage: {
    marginRight: 12,
    width: 40,
    height: 40,
    borderRadius: "50%",
    overflow: "hidden",
  },
  suggestionText: {
    flex: 1,
  },
  noResults: {
    padding: "16px",
    textAlign: "center",
    color: theme.palette.neutralSecondary,
  },
  title: {
    color: theme.palette.neutralPrimary,
    fontSize: "24px",
    fontWeight: "bold",
  },
  commandBar: {
    backgroundColor: theme.palette.neutralLighter,
    fontSize: "16px",
    fontWeight: "bold",
  },
}));

const searchBoxStyles: Partial<ISearchBoxStyles> = {
  root: {
    width: "100%",
    maxWidth: 400,
    margin: "8px auto",
  },
};

interface HeaderProps {
  title?: string;
  dishes: Dish[];
}

const Header: React.FC<HeaderProps> = ({ title = "Cuisine Pro", dishes }) => {
  const classes = useStyles();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Dish[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchBoxRef = useRef<HTMLDivElement>(null);
  const searchDishes = useCallback((query: string, dishes: Dish[]): Dish[] => {
    if (!query) return [];
    const lowerCaseQuery = query.toLowerCase();
    if (dishes.length === 0) return [];
    return dishes.filter(
      (dish) =>
        dish.name.toLowerCase().includes(lowerCaseQuery) ||
        dish.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(lowerCaseQuery)
        )
    );
  }, []);
  useEffect(() => {
    if (searchQuery.trim().length >= 2) {
      const results = searchDishes(searchQuery, dishes);
      console.log(results);
      setSearchResults(results);
      setShowSuggestions(true);
    } else {
      setSearchResults([]);
      setShowSuggestions(false);
    }
  }, [dishes, searchDishes, searchQuery]);

  const handleSearchChange = (
    event?: React.ChangeEvent<HTMLInputElement>,
    newValue?: string
  ) => {
    setSearchQuery(newValue || "");
  };

  const handleItemClick = (dishId: string) => {
    setShowSuggestions(false);
    router.push(`/dish/${dishId}`);
  };

  const handleDismiss = () => {
    setShowSuggestions(false);
  };

  const classNames = mergeStyleSets({
    itemCell: {
      padding: 10,
      boxSizing: "border-box",
      borderBottom: "1px solid #eaeaea",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      "&:hover": { backgroundColor: "#f3f2f1" },
    },
    itemImage: {
      flexShrink: 0,
      marginRight: 10,
    },
    itemContent: {
      overflow: "hidden",
    },
    itemName: {
      fontSize: 16,
      fontWeight: 600,
      marginBottom: 4,
    },
    itemDetails: {
      fontSize: 12,
      color: "#605e5c",
    },
  });

  // Command bar items
  const getItems = (): ICommandBarItemProps[] => {
    const items: ICommandBarItemProps[] = [
      {
        key: "home",
        text: "Home",
        iconProps: { iconName: "Home" },
        onClick: () => router.push("/"),
      },
      {
        key: "dishes",
        text: "All Dishes",
        iconProps: { iconName: "Food" },
        onClick: () => router.push("/dishes"),
      },
      {
        key: "suggester",
        text: "Dish Suggester",
        iconProps: { iconName: "FoodRating" },
        onClick: () => router.push("/suggester"),
      },
    ];

    return items;
  };

  const getFarItems = (): ICommandBarItemProps[] => {
    const farItems: ICommandBarItemProps[] = [];

    return farItems;
  };

  const onRenderCell = (item?: Dish): React.ReactNode => {
    if (!item) return <></>;

    return (
      <div
        className={classNames.itemCell}
        onClick={() => handleItemClick(item.id)}
      >
        {item.image_url ? (
          <Image
            className={classNames.itemImage}
            src={item.image_url}
            alt={item.name}
            width={40}
            height={40}
            imageFit={ImageFit.cover}
          />
        ) : (
          <PersonaCoin text={item.name} size={10} />
        )}
        <div className={classNames.itemContent}>
          <div className={classNames.itemName}>{item.name}</div>
          <div className={classNames.itemDetails}>
            {item.diet} • {item.region} • {item.course}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <Text variant="large" className={classes.title}>
          {title}
        </Text>
      </div>
      <CommandBar
        items={getItems()}
        className={classes.commandBar}
        farItems={getFarItems()}
        ariaLabel="Use left and right arrow keys to navigate between commands"
      />
      <div className={classes.searchContainer} ref={searchBoxRef}>
        <SearchBox
          placeholder="Search dishes, ingredients, or regions..."
          styles={searchBoxStyles}
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={() => searchQuery.length >= 2 && setShowSuggestions(true)}
          clearButtonProps={{ ariaLabel: "Clear search" }}
        />
        {showSuggestions && searchResults.length > 0 && (
          <Callout
            target={searchBoxRef.current}
            isBeakVisible={false}
            gapSpace={0}
            directionalHint={DirectionalHint.bottomCenter}
            onDismiss={handleDismiss}
            setInitialFocus
          >
            <FocusZone>
              <div className={classes.suggestionsContainer}>
                <List items={searchResults} onRenderCell={onRenderCell} />
              </div>
            </FocusZone>
          </Callout>
        )}
        {showSuggestions &&
          searchResults.length === 0 &&
          searchQuery.trim().length >= 2 && (
            <Callout
              target={searchBoxRef.current}
              isBeakVisible={false}
              gapSpace={0}
              directionalHint={DirectionalHint.bottomCenter}
              onDismiss={handleDismiss}
            >
              <Stack tokens={{ padding: 16 }} horizontalAlign="center">
                <Text>No results found for &quot;{searchQuery}&quot;</Text>
              </Stack>
            </Callout>
          )}
      </div>
    </div>
  );
};

export default Header;
