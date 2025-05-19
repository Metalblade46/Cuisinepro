"use client";
import React from "react";

import {
  Stack,
  Text,
  Image,
  Label,
  PrimaryButton,
  IconButton,
  ImageFit,
  mergeStyleSets,
  MessageBar,
  MessageBarType,
} from "@fluentui/react";
import { useRouter } from "next/navigation";
import { Dish } from "@/types";

const classNames = mergeStyleSets({
  container: {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  backButton: {
    marginRight: "10px",
  },
  image: {
    borderRadius: "8px",
    width: "100%",
    height: "auto",
    maxHeight: "400px",
    objectFit: "cover",
  },
  detailsRow: {
    display: "flex",
    margin: "10px 0",
  },
  detailsLabel: {
    width: "150px",
    fontWeight: 600,
  },
  detailsValue: {
    flex: 1,
  },
  ingredientsList: {
    listStyleType: "disc",
    paddingLeft: "20px",
  },
  tag: {
    backgroundColor: "#f3f2f1",
    borderRadius: "16px",
    padding: "4px 12px",
    margin: "0 4px 4px 0",
    display: "inline-block",
  },
  timeInfo: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0",
  },
  timeCard: {
    backgroundColor: "#f3f2f1",
    padding: "15px",
    borderRadius: "8px",
    flex: "1",
    margin: "0 10px",
    textAlign: "center",
  },
});

const DishDetails = ({ dish }: { dish: Dish | null }) => {
  const router = useRouter();

  if (!dish) {
    return (
      <Stack className={classNames.container}>
        <MessageBar messageBarType={MessageBarType.error}>
          No dish found
        </MessageBar>
        <PrimaryButton
          text="Go Back"
          onClick={() => router.back()}
          styles={{ root: { marginTop: 20 } }}
        />
      </Stack>
    );
  }

  if (!dish) {
    return (
      <Stack className={classNames.container}>
        <MessageBar messageBarType={MessageBarType.error}>
          Dish not found
        </MessageBar>
        <PrimaryButton
          text="Go Back to All Dishes"
          onClick={() => router.push("/dishes")}
          styles={{ root: { marginTop: 20 } }}
        />
      </Stack>
    );
  }

  return (
    <Stack className={classNames.container}>
      <div className={classNames.header}>
        <IconButton
          className={classNames.backButton}
          iconProps={{ iconName: "Back" }}
          onClick={() => router.back()}
          ariaLabel="Go back"
        />
        <Text variant="xLarge" block>
          {dish.name}
        </Text>
      </div>

      {dish.image_url && (
        <Image
          src={dish.image_url}
          alt={dish.name}
          className={classNames.image}
          imageFit={ImageFit.cover}
        />
      )}

      <Stack horizontal tokens={{ childrenGap: 20 }} style={{ marginTop: 20 }}>
        <Stack tokens={{ childrenGap: 16 }} style={{ flex: 2 }}>
          <Stack>
            <Text variant="mediumPlus" block style={{ fontWeight: 600 }}>
              Description
            </Text>
            <Text block>{"No description available"}</Text>
          </Stack>

          <Stack>
            <Text variant="mediumPlus" block style={{ fontWeight: 600 }}>
              Ingredients
            </Text>
            <ul className={classNames.ingredientsList}>
              {dish.ingredients.map((ingredient, index) => (
                <li key={index}>
                  <Text>{ingredient}</Text>
                </li>
              ))}
            </ul>
          </Stack>

          <div className={classNames.timeInfo}>
            <div className={classNames.timeCard}>
              <Text variant="mediumPlus" block style={{ fontWeight: 600 }}>
                Preparation Time
              </Text>
              <Text variant="large">{dish.prep_time} minutes</Text>
            </div>
            <div className={classNames.timeCard}>
              <Text variant="mediumPlus" block style={{ fontWeight: 600 }}>
                Cooking Time
              </Text>
              <Text variant="large">{dish.cook_time} minutes</Text>
            </div>
            <div className={classNames.timeCard}>
              <Text variant="mediumPlus" block style={{ fontWeight: 600 }}>
                Total Time
              </Text>
              <Text variant="large">
                {dish.prep_time + dish.cook_time} minutes
              </Text>
            </div>
          </div>
        </Stack>

        <Stack tokens={{ childrenGap: 16 }} style={{ flex: 1 }}>
          <Stack.Item>
            <Label>Diet Type</Label>
            <div
              className={classNames.tag}
              style={{
                backgroundColor:
                  dish.diet === "vegetarian" ? "#e3f5e1" : "#fdefef",
                color: dish.diet === "vegetarian" ? "#107c10" : "#d13438",
              }}
            >
              {dish.diet === "vegetarian" ? "Vegetarian" : "Non-Vegetarian"}
            </div>
          </Stack.Item>

          <Stack.Item>
            <Label>Flavor</Label>
            <div className={classNames.tag}>
              {dish.flavor_profile || "No flavor profile available"}
            </div>
          </Stack.Item>

          <Stack.Item>
            <Label>Course</Label>
            <div className={classNames.tag}>
              {dish.course || "No course available"}
            </div>
          </Stack.Item>

          <Stack.Item>
            <Label>Origin</Label>
            <Stack horizontal tokens={{ childrenGap: 8 }}>
              <div className={classNames.tag}>
                {dish.state || "Unknown state"}
              </div>
              <div className={classNames.tag}>
                {dish.region || "Unknown region"}
              </div>
            </Stack>
          </Stack.Item>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DishDetails;
