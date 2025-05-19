"use client";

import { useState, useMemo, useEffect, useCallback } from "react";

import {
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  SelectionMode,
  IColumn,
  Dropdown,
  IDropdownOption,
  Stack,
  Text,
  SearchBox,
  Image,
  ImageFit,
  mergeStyleSets,
  Shimmer,
  ShimmerElementType,
  IShimmerElement,
  PrimaryButton,
  CheckboxVisibility,
  MarqueeSelection,
} from "@fluentui/react";
import { Dish } from "../types";
import { useRouter } from "next/navigation";

const classNames = mergeStyleSets({
  container: {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    marginBottom: "20px",
  },
  filterBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "20px",
  },
  searchLabel: {
    fontWeight: 600,
  },
  tableWrapper: {
    position: "relative",
    height: "calc(100vh - 200px)",
    overflow: "auto",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
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
});

const shimmerElements: IShimmerElement[] = [
  { type: ShimmerElementType.circle, height: 40 },
  { type: ShimmerElementType.gap, width: 10 },
  { type: ShimmerElementType.line, width: "40%" },
  { type: ShimmerElementType.gap, width: 10 },
  { type: ShimmerElementType.line, width: "20%" },
  { type: ShimmerElementType.gap, width: 10 },
  { type: ShimmerElementType.line, width: "15%" },
];

const ITEMS_PER_PAGE = 10;

const DishesList = ({
  dishes,
  states,
  regions,
}: {
  dishes: Dish[];
  states: string[];
  regions: string[];
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [dietFilter, setDietFilter] = useState<string>("");
  const [stateFilter, setStateFilter] = useState<string>("");
  const [regionFilter, setRegionFilter] = useState<string>("");
  const [sortColumn, setSortColumn] = useState<string>("name");
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [dishes]);

  // Selection setup
  const selection = new Selection({
    onSelectionChanged: () => {
      const selectedItems = selection.getSelection() as Dish[];
      if (selectedItems.length === 1) {
        router.push(`/dish/${selectedItems[0].id}`);
      }
    },
  });

  const searchDishesByQuery = useCallback(
    (query: string, dishes: Dish[]): Dish[] => {
      if (!query) return dishes;
      const lowerCaseQuery = query.toLowerCase();
      if (dishes.length === 0) return dishes;
      return dishes.filter(
        (dish) =>
          dish.name.toLowerCase().includes(lowerCaseQuery) ||
          dish.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(lowerCaseQuery)
          )
      );
    },
    []
  );
  // Filter and sort dishes
  const filterDishes = useCallback(() => {
    let result = [...dishes];

    // Apply search filter

    result = searchDishesByQuery(searchQuery, result);

    // Apply diet filter
    if (dietFilter) {
      result = result.filter((dish) => dish.diet === dietFilter);
    }

    // Apply state filter
    if (stateFilter) {
      result = result.filter((dish) => dish.state === stateFilter);
    }

    // Apply region filter
    if (regionFilter) {
      result = result.filter((dish) => dish.region === regionFilter);
    }

    // Apply sorting
    result.sort((a, b) => {
      let valueA = a[sortColumn as keyof Dish];
      let valueB = b[sortColumn as keyof Dish];

      // Special case for preparationTime + cookingTime
      if (sortColumn === "total_time") {
        valueA = a.prep_time + a.cook_time;
        valueB = b.prep_time + b.cook_time;
      }

      if (typeof valueA === "string" && typeof valueB === "string") {
        return sortAsc
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }
      if (valueA && valueB) {
        return sortAsc ? (valueA > valueB ? 1 : -1) : valueA < valueB ? 1 : -1;
      }
      if (valueA) {
        return sortAsc ? 1 : -1;
      }
      if (valueB) {
        return sortAsc ? -1 : 1;
      }
      return 0;
    });

    return result;
  }, [
    dishes,
    searchDishesByQuery,
    searchQuery,
    dietFilter,
    stateFilter,
    regionFilter,
    sortColumn,
    sortAsc,
  ]);

  // Pagination
  const totalPages = Math.ceil(filterDishes().length / ITEMS_PER_PAGE);
  const paginatedDishes = filterDishes().slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, dietFilter, stateFilter, regionFilter]);

  // Column definitions
  const columns: IColumn[] = [
    {
      key: "name",
      name: "Dish Name",
      fieldName: "name",
      minWidth: 150,
      maxWidth: 200,
      isRowHeader: true,
      isResizable: true,
      isSorted: sortColumn === "name",
      isSortedDescending: sortColumn === "name" && !sortAsc,
      sortAscendingAriaLabel: "Sorted A to Z",
      sortDescendingAriaLabel: "Sorted Z to A",
      onColumnClick: () => {
        if (sortColumn === "name") {
          setSortAsc(!sortAsc);
        } else {
          setSortColumn("name");
          setSortAsc(true);
        }
      },
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
      key: "diet",
      name: "Diet Type",
      fieldName: "diet",
      minWidth: 70,
      maxWidth: 90,
      isResizable: true,
      isSorted: sortColumn === "diet",
      isSortedDescending: sortColumn === "diet" && !sortAsc,
      onColumnClick: () => {
        if (sortColumn === "diet") {
          setSortAsc(!sortAsc);
        } else {
          setSortColumn("diet");
          setSortAsc(true);
        }
      },
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
      key: "course",
      name: "Course",
      fieldName: "course",
      minWidth: 100,
      maxWidth: 120,
      isResizable: true,
      isSorted: sortColumn === "course",
      isSortedDescending: sortColumn === "course" && !sortAsc,
      onColumnClick: () => {
        if (sortColumn === "course") {
          setSortAsc(!sortAsc);
        } else {
          setSortColumn("course");
          setSortAsc(true);
        }
      },
      onRender: (item: Dish) => (
        <span style={{ textTransform: "capitalize" }}>{item.course}</span>
      ),
    },
    {
      key: "prep_time",
      name: "Prep Time",
      fieldName: "prep_time",
      minWidth: 80,
      maxWidth: 90,
      isResizable: true,
      isSorted: sortColumn === "prep_time",
      isSortedDescending: sortColumn === "prep_time" && !sortAsc,
      onColumnClick: () => {
        if (sortColumn === "prep_time") {
          setSortAsc(!sortAsc);
        } else {
          setSortColumn("prep_time");
          setSortAsc(true);
        }
      },
      onRender: (item: Dish) =>
        item.prep_time ? `${item.prep_time} mins` : "N/A",
    },
    {
      key: "cook_time",
      name: "Cook Time",
      fieldName: "cook_time",
      minWidth: 80,
      maxWidth: 90,
      isResizable: true,
      isSorted: sortColumn === "cook_time",
      isSortedDescending: sortColumn === "cook_time" && !sortAsc,
      onColumnClick: () => {
        if (sortColumn === "cook_time") {
          setSortAsc(!sortAsc);
        } else {
          setSortColumn("cook_time");
          setSortAsc(true);
        }
      },
      onRender: (item: Dish) =>
        item.cook_time ? `${item.cook_time} mins` : "N/A",
    },
    {
      key: "total_time",
      name: "Total Time",
      minWidth: 80,
      maxWidth: 90,
      isResizable: true,
      isSorted: sortColumn === "total_time",
      isSortedDescending: sortColumn === "total_time" && !sortAsc,
      onColumnClick: () => {
        if (sortColumn === "total_time") {
          setSortAsc(!sortAsc);
        } else {
          setSortColumn("total_time");
          setSortAsc(true);
        }
      },
      onRender: (item: Dish) =>
        item.prep_time && item.cook_time
          ? `${item.prep_time + item.cook_time} mins`
          : "N/A",
    },
    {
      key: "state",
      name: "State",
      fieldName: "state",
      minWidth: 100,
      maxWidth: 130,
      isResizable: true,
      isSorted: sortColumn === "state",
      isSortedDescending: sortColumn === "state" && !sortAsc,
      onColumnClick: () => {
        if (sortColumn === "state") {
          setSortAsc(!sortAsc);
        } else {
          setSortColumn("state");
          setSortAsc(true);
        }
      },
    },
    {
      key: "region",
      name: "Region",
      fieldName: "region",
      minWidth: 100,
      maxWidth: 130,
      isResizable: true,
      isSorted: sortColumn === "region",
      isSortedDescending: sortColumn === "region" && !sortAsc,
      onColumnClick: () => {
        if (sortColumn === "region") {
          setSortAsc(!sortAsc);
        } else {
          setSortColumn("region");
          setSortAsc(true);
        }
      },
    },
  ];

  // Filter options
  const dietOptions: IDropdownOption[] = [
    { key: "", text: "All Diet Types" },
    { key: "vegetarian", text: "Vegetarian" },
    { key: "non vegetarian", text: "Non-Vegetarian" },
  ];

  const stateOptions: IDropdownOption[] = useMemo(() => {
    return [
      { key: "", text: "All States" },
      ...states.map((state) => ({ key: state, text: state })),
    ];
  }, [states]);

  const regionOptions: IDropdownOption[] = useMemo(() => {
    return [
      { key: "", text: "All Regions" },
      ...regions.map((region) => ({ key: region, text: region })),
    ];
  }, [regions]);

  const clearFilters = () => {
    setSearchQuery("");
    setDietFilter("");
    setStateFilter("");
    setRegionFilter("");
  };

  return (
    <div className={classNames.container}>
      <Stack className={classNames.header}>
        <Text variant="xLarge" style={{ marginBottom: "10px" }}>
          Indian Cuisine Collection
        </Text>
        <Text variant="medium">
          Explore our collection of traditional Indian dishes
        </Text>
      </Stack>

      <Stack
        horizontal
        tokens={{ childrenGap: 10 }}
        className={classNames.filterBar}
      >
        <Stack.Item grow={3}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Text variant="medium" className={classNames.searchLabel}>
              Search
            </Text>
            <SearchBox
              placeholder="Search dishes, ingredients, or regions"
              value={searchQuery}
              onChange={(_, newValue) => setSearchQuery(newValue || "")}
              onClear={() => setSearchQuery("")}
            />
          </div>
        </Stack.Item>
        <Stack.Item grow={1}>
          <Dropdown
            placeholder="Diet Type"
            label="Diet Type"
            options={dietOptions}
            selectedKey={dietFilter}
            onChange={(_, option) =>
              setDietFilter(option?.key.toString() || "")
            }
          />
        </Stack.Item>
        <Stack.Item grow={1}>
          <Dropdown
            placeholder="State"
            label="State"
            options={stateOptions}
            selectedKey={stateFilter}
            onChange={(_, option) =>
              setStateFilter(option?.key.toString() || "")
            }
          />
        </Stack.Item>
        <Stack.Item grow={1}>
          <Dropdown
            placeholder="Region"
            label="Region"
            options={regionOptions}
            selectedKey={regionFilter}
            onChange={(_, option) =>
              setRegionFilter(option?.key.toString() || "")
            }
          />
        </Stack.Item>
        <Stack.Item align="end">
          <PrimaryButton
            text="Clear Filters"
            onClick={clearFilters}
            disabled={
              !searchQuery && !dietFilter && !stateFilter && !regionFilter
            }
            style={{ marginTop: 22 }}
          />
        </Stack.Item>
      </Stack>

      <div className={classNames.tableWrapper}>
        {loading ? (
          Array.from({ length: 10 }).map((_, index) => (
            <Shimmer
              key={index}
              shimmerElements={shimmerElements}
              style={{ margin: "10px 0" }}
            />
          ))
        ) : (
          <MarqueeSelection selection={selection}>
            <DetailsList
              items={paginatedDishes}
              columns={columns}
              selectionMode={SelectionMode.single}
              selection={selection}
              layoutMode={DetailsListLayoutMode.justified}
              isHeaderVisible={true}
              checkboxVisibility={CheckboxVisibility.hidden}
              onItemInvoked={(item: Dish) => {
                router.push(`/dish/${item.id}`);
              }}
            />
          </MarqueeSelection>
        )}
      </div>

      <div className={classNames.footer}>
        <Text>
          Showing {paginatedDishes.length} of {dishes.length} dishes
        </Text>
        <Stack horizontal tokens={{ childrenGap: 10 }}>
          <PrimaryButton
            text="Previous"
            disabled={currentPage === 1 || loading}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          />
          <Text variant="large" style={{ lineHeight: "32px" }}>
            Page {currentPage} of {totalPages || 1}
          </Text>
          <PrimaryButton
            text="Next"
            disabled={currentPage >= totalPages || loading}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
          />
        </Stack>
      </div>
    </div>
  );
};

export default DishesList;
