"use client";

import { useState, useEffect, useCallback } from "react";

import {
  Stack,
  Text,
  TagPicker,
  ITag,
  IBasePickerSuggestionsProps,
  DetailsList,
  DetailsListLayoutMode,
  IColumn,
  SelectionMode,
  Image,
  ImageFit,
  mergeStyleSets,
  MessageBar,
  MessageBarType,
  DefaultButton,
  IconButton,
} from "@fluentui/react";

import { Dish } from "../types";
import { useRouter } from "next/navigation";
import { getDishesByIngredients } from "@/data/dishes";

const classNames = mergeStyleSets({
  container: {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    marginBottom: "20px",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    marginBottom: "20px",
  },
  imageCell: {
    display: "flex",
    alignItems: "center",
  },
  dishImage: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    marginRight: 8,
    objectFit: "cover",
  },
  linkStyle: {
    color: "#0078d4",
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  selectedIngredients: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "10px",
    gap: "8px",
  },
  ingredientTag: {
    backgroundColor: "#E1DFDD",
    padding: "4px 10px",
    borderRadius: "16px",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
  },
  suggestionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  suggestionCard: {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    },
  },
  suggestionImage: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
  },
  suggestionContent: {
    padding: "16px",
  },
  suggestionTitle: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "8px",
  },
  suggestionDetails: {
    fontSize: "14px",
    color: "#605E5C",
  },
  matchInfo: {
    display: "flex",
    alignItems: "center",
    marginTop: "8px",
  },
  matchBadge: {
    backgroundColor: "#E8F5FF",
    color: "#0078D4",
    padding: "2px 8px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "600",
  },
});

const pickerSuggestionsProps: IBasePickerSuggestionsProps = {
  suggestionsHeaderText: "Suggested ingredients",
  noResultsFoundText: "No ingredients found",
};

interface IngredientTag extends ITag {
  name: string;
}

const DishSuggester = ({ allIngredients }: { allIngredients: string[] }) => {
  const router = useRouter();
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>(
    JSON.parse(localStorage.getItem("selectedIngredients") || "[]")
  );
  const [suggestedDishes, setSuggestedDishes] = useState<Dish[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  // Calculate match percentage
  const getMatchPercentage = useCallback(
    (dish: Dish): number => {
      const dishIngredients = dish.ingredients.map((i) => i.toLowerCase());
      const selectedLowerCase = selectedIngredients.map((i) => i.toLowerCase());

      const matchCount = dishIngredients.filter((i) =>
        selectedLowerCase.includes(i)
      ).length;

      return Math.round((matchCount / dishIngredients.length) * 100);
    },
    [selectedIngredients]
  );

  useEffect(() => {
    const updateSuggestedDishes = async () => {
      const suggestedDishes = await getDishesByIngredients(selectedIngredients);
      setSuggestedDishes(
        suggestedDishes
          .map((dish) => ({ ...dish, match: getMatchPercentage(dish) }))
          .sort((a, b) => b.match - a.match)
      );
    };
    if (selectedIngredients.length > 0) {
      updateSuggestedDishes();
    } else {
      setSuggestedDishes([]);
    }
  }, [getMatchPercentage, selectedIngredients]);
  useEffect(() => {
    localStorage.setItem(
      "selectedIngredients",
      JSON.stringify(selectedIngredients)
    );
  }, [selectedIngredients]);

  const ingredientList = allIngredients.map((ingredient) => ({
    key: ingredient,
    name: ingredient,
  }));

  const filteredIngredients = searchTerm
    ? ingredientList.filter((tag) =>
        tag.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : ingredientList;

  const handleRemoveIngredient = (ingredient: string) => {
    setSelectedIngredients((state) => state.filter((i) => i !== ingredient));
  };

  const onFilterChanged = (filterText: string): IngredientTag[] => {
    setSearchTerm(filterText);
    return filteredIngredients;
  };

  const onItemSelected = (item?: ITag): IngredientTag | null => {
    if (item) {
      setSelectedIngredients([...selectedIngredients, item.name]);
      setSearchTerm("");
    }
    return null;
  };

  const clearIngredients = () => {
    setSelectedIngredients([]);
  };

  // Column definitions for list view
  const columns: IColumn[] = [
    {
      key: "name",
      name: "Dish Name",
      fieldName: "name",
      minWidth: 200,
      maxWidth: 300,
      isRowHeader: true,
      isResizable: true,
      onRender: (item: Dish) => (
        <div className={classNames.imageCell}>
          {item.image_url ? (
            <Image
              src={
                item.image_url ??
                `https://source.unsplash.com/random/?${item.name}&1`
              }
              alt={item.name}
              className={classNames.dishImage}
              imageFit={ImageFit.cover}
            />
          ) : (
            <div
              className={classNames.dishImage}
              style={{ backgroundColor: "#f3f2f1" }}
            />
          )}
          <span
            className={classNames.linkStyle}
            onClick={() => router.push(`/dish/${item.id}`)}
          >
            {item.name}
          </span>
        </div>
      ),
    },
    {
      key: "match",
      name: "Match",
      fieldName: "match",
      minWidth: 70,
      maxWidth: 90,
      isResizable: true,
      onRender: (item: Dish) => {
        const matchPercent = getMatchPercentage(item);
        return (
          <div
            style={{
              color:
                matchPercent > 70
                  ? "#107c10"
                  : matchPercent > 40
                  ? "#ca5010"
                  : "#a19f9d",
              fontWeight: 600,
            }}
          >
            {matchPercent}%
          </div>
        );
      },
    },
    {
      key: "ingredients",
      name: "Ingredients",
      fieldName: "ingredients",
      minWidth: 200,
      isResizable: true,
      onRender: (item: Dish) => {
        return item.ingredients.map((ing, i) => (
          <span
            key={i}
            style={{
              backgroundColor: selectedIngredients.includes(ing)
                ? "#DFF6DD"
                : "#F3F2F1",
              padding: "2px 8px",
              borderRadius: "12px",
              margin: "0 4px 4px 0",
              display: "inline-block",
              fontSize: "12px",
              fontWeight: selectedIngredients.includes(ing) ? 600 : 400,
            }}
          >
            {ing}
          </span>
        ));
      },
    },
    {
      key: "dietType",
      name: "Diet Type",
      fieldName: "dietType",
      minWidth: 90,
      maxWidth: 100,
      isResizable: true,
      onRender: (item: Dish) => (
        <span
          style={{
            color: item.diet === "vegetarian" ? "#107c10" : "#d13438",
            fontWeight: 500,
          }}
        >
          {item.diet === "vegetarian" ? "Vegetarian" : "Non-Vegetarian"}
        </span>
      ),
    },
    {
      key: "region",
      name: "Region",
      fieldName: "region",
      minWidth: 120,
      maxWidth: 150,
      isResizable: true,
    },
  ];

  const renderGridView = () => (
    <div className={classNames.suggestionGrid}>
      {suggestedDishes.map((dish) => {
        return (
          <div
            key={dish.id}
            className={classNames.suggestionCard}
            onClick={() => router.push(`/dish/${dish.id}`)}
          >
            {dish.image_url && (
              <Image
                src={
                  dish.image_url ??
                  `https://source.unsplash.com/random/?${dish.name}&1`
                }
                alt={dish.name}
                className={classNames.suggestionImage}
                imageFit={ImageFit.cover}
              />
            )}
            <div className={classNames.suggestionContent}>
              <div className={classNames.suggestionTitle}>{dish.name}</div>
              <div className={classNames.suggestionDetails}>
                <span
                  style={{
                    color: dish.diet === "vegetarian" ? "#107c10" : "#d13438",
                    fontWeight: 500,
                  }}
                >
                  {dish.diet === "vegetarian" ? "Vegetarian" : "Non-Vegetarian"}
                </span>
                {" · "}
                {dish.region}
              </div>
              <div className={classNames.matchInfo}>
                <div
                  className={classNames.matchBadge}
                  style={{
                    backgroundColor:
                      dish.match && dish.match > 70
                        ? "#DFF6DD"
                        : dish.match && dish.match > 40
                        ? "#ffffb3"
                        : "#FED9CC",
                    color:
                      dish.match && dish.match > 70
                        ? "#107c10"
                        : dish.match && dish.match > 40
                        ? "#cccc00"
                        : "#ca5010",
                  }}
                >
                  {dish.match}% match
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderListView = () => (
    <DetailsList
      items={suggestedDishes}
      columns={columns}
      selectionMode={SelectionMode.none}
      layoutMode={DetailsListLayoutMode.justified}
      isHeaderVisible={true}
      onItemInvoked={(item: Dish) => {
        router.push(`/dish/${item.id}`);
      }}
    />
  );

  return (
    <div className={classNames.container}>
      <Stack className={classNames.header}>
        <Text variant="xLarge" style={{ marginBottom: "10px" }}>
          Dish Suggester
        </Text>
        <Text variant="medium" style={{ marginBottom: "10px" }}>
          Find dishes based on ingredients you have available
        </Text>
      </Stack>

      <div className={classNames.card}>
        <Stack tokens={{ childrenGap: 16 }}>
          <Text variant="mediumPlus" style={{ fontWeight: 600 }}>
            Select Your Available Ingredients
          </Text>

          <TagPicker
            onResolveSuggestions={onFilterChanged}
            getTextFromItem={(item: ITag) => item.name}
            pickerSuggestionsProps={pickerSuggestionsProps}
            itemLimit={20}
            inputProps={{
              placeholder: "Type an ingredient name",
            }}
            onItemSelected={onItemSelected}
            selectedItems={selectedIngredients.map((ing) => ({
              key: ing,
              name: ing,
            }))}
          />

          <Stack horizontal horizontalAlign="space-between">
            <Text>Selected: {selectedIngredients.length} ingredients</Text>
            <DefaultButton
              text="Clear All"
              onClick={clearIngredients}
              disabled={selectedIngredients.length === 0}
            />
          </Stack>

          {selectedIngredients.length > 0 && (
            <div className={classNames.selectedIngredients}>
              {selectedIngredients.map((ingredient, index) => (
                <div key={index} className={classNames.ingredientTag}>
                  {ingredient}
                  <IconButton
                    iconProps={{ iconName: "Cancel" }}
                    title="Remove"
                    ariaLabel="Remove"
                    styles={{
                      root: {
                        height: 24,
                        width: 24,
                        backgroundColor: "transparent",
                        border: "none",
                        color: "#000",
                      },
                    }}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />
                </div>
              ))}
            </div>
          )}

          {selectedIngredients.length === 0 && (
            <MessageBar messageBarType={MessageBarType.info}>
              Select ingredients from the dropdown to get dish suggestions.
            </MessageBar>
          )}
        </Stack>
      </div>

      <Stack className={classNames.card}>
        <Stack
          horizontal
          horizontalAlign="space-between"
          verticalAlign="center"
        >
          <Text variant="mediumPlus" style={{ fontWeight: 600 }}>
            Suggested Dishes ({suggestedDishes.length})
          </Text>
          <Stack horizontal tokens={{ childrenGap: 8 }}>
            <DefaultButton
              iconProps={{ iconName: "GridViewMedium" }}
              text="Grid"
              checked={viewMode === "grid"}
              onClick={() => setViewMode("grid")}
            />
            <DefaultButton
              iconProps={{ iconName: "BulletedList" }}
              text="List"
              checked={viewMode === "list"}
              onClick={() => setViewMode("list")}
            />
          </Stack>
        </Stack>

        {selectedIngredients.length === 0 ? (
          <MessageBar
            messageBarType={MessageBarType.warning}
            styles={{ root: { marginTop: 16 } }}
          >
            Select at least one ingredient to see dish suggestions.
          </MessageBar>
        ) : suggestedDishes.length === 0 ? (
          <MessageBar
            messageBarType={MessageBarType.warning}
            styles={{ root: { marginTop: 16 } }}
          >
            No dishes found with the selected ingredients. Try selecting
            different ingredients.
          </MessageBar>
        ) : (
          <>
            <Text style={{ marginTop: 8, marginBottom: 16 }}>
              Based on your ingredients, we found {suggestedDishes.length}{" "}
              dishes you can prepare.
            </Text>
            {viewMode === "grid" ? renderGridView() : renderListView()}
          </>
        )}
      </Stack>
    </div>
  );
};

export default DishSuggester;
