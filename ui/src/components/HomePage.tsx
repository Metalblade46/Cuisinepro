"use client";

import {
  Stack,
  Text,
  PrimaryButton,
  DefaultButton,
  mergeStyleSets,
  DocumentCard,
  DocumentCardImage,
  ImageFit,
  DocumentCardTitle,
  DocumentCardActivity,
  IDocumentCardStyles,
  IconButton,
} from "@fluentui/react";
import { useRouter } from "next/navigation";
import { ListIcon, SearchIcon, StarIcon } from "lucide-react";
import { Dish } from "@/types";

const classNames = mergeStyleSets({
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  },
  hero: {
    height: "400px",
    backgroundImage:
      "url(https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    borderRadius: "8px",
    marginBottom: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "8px",
  },
  heroContent: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign: "center",
    padding: "20px",
    maxWidth: "800px",
  },
  heroTitle: {
    fontSize: "36px",
    fontWeight: 600,
    marginBottom: "16px",
    color: "white",
  },
  heroSubtitle: {
    fontSize: "20px",
    marginBottom: "24px",
    color: "white",
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: 600,
    marginBottom: "20px",
    marginTop: "40px",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
  },
  featureCard: {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    padding: "24px",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    },
  },
  featureIcon: {
    fontSize: "32px",
    color: "#d83b01",
    marginBottom: "16px",
  },
  searchContainer: {
    maxWidth: "600px",
    margin: "0 auto 40px",
  },
  card: {
    margin: 0,
    maxWidth: "none",
    transition: "transform 0.2s, box-shadow 0.2s",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    },
  },
  cardImage: {
    height: "160px",
  },
});

const cardStyles: IDocumentCardStyles = {
  root: {
    margin: 0,
    maxWidth: "none",
    transition: "transform 0.2s, box-shadow 0.2s",
    selectors: {
      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
      },
    },
  },
};
function shuffle(array: Dish[]) {
  const shuffledArray = [...array];
  let currentIndex = shuffledArray.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[currentIndex],
    ];
  }
  return shuffledArray;
}
const HomePage = ({ dishes }: { dishes: Dish[] }) => {
  const router = useRouter();
  const featuredDishes = shuffle(dishes).slice(0, 6);
  const features = [
    {
      icon: SearchIcon,
      title: "Search Dishes",
      description: "Find dishes by name, ingredients, or region",
      action: () => router.push("/dishes"),
    },
    {
      icon: StarIcon,
      title: "Dish Suggester",
      description: "Discover what you can make with ingredients you have",
      action: () => router.push("/suggester"),
    },
    {
      icon: ListIcon,
      title: "Browse All Dishes",
      description: "Explore our collection of traditional Indian dishes",
      action: () => router.push("/dishes"),
    },
  ];

  return (
    <div>
      <div className={classNames.hero}>
        <div className={classNames.heroOverlay}></div>
        <div className={classNames.heroContent}>
          <Text className={classNames.heroTitle}>
            Discover the Rich Flavors of Indian Cuisine
          </Text>
          <Text className={classNames.heroSubtitle}>
            Explore authentic dishes from across India
          </Text>
          <Stack
            horizontal
            tokens={{ childrenGap: 16 }}
            horizontalAlign="center"
          >
            <PrimaryButton
              text="Explore All Dishes"
              onClick={() => router.push("/dishes")}
              styles={{ root: { padding: "0 24px", height: "44px" } }}
            />
            <DefaultButton
              text="Find by Ingredients"
              onClick={() => router.push("/suggester")}
              styles={{ root: { padding: "0 24px", height: "44px" } }}
            />
          </Stack>
        </div>
      </div>

      <div className={classNames.container}>
        <Text className={classNames.sectionTitle}>Features</Text>

        <div className={classNames.cardGrid} style={{ marginTop: "20px" }}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={classNames.featureCard}
              onClick={feature.action}
            >
              <Stack horizontalAlign="center" tokens={{ childrenGap: 12 }}>
                <IconButton
                  iconProps={{ iconName: feature.icon.name }}
                  styles={{
                    root: {
                      color: "#d83b01",
                      fontSize: 32,
                      height: "auto",
                    },
                    icon: { fontSize: 32 },
                  }}
                />
                <feature.icon />
                <Text variant="large" style={{ fontWeight: 600 }}>
                  {feature.title}
                </Text>
                <Text style={{ textAlign: "center" }}>
                  {feature.description}
                </Text>
              </Stack>
            </div>
          ))}
        </div>

        <Text className={classNames.sectionTitle}>Featured Dishes</Text>

        <div className={classNames.cardGrid} style={{ marginTop: "20px" }}>
          {featuredDishes.map((dish) => (
            <DocumentCard
              key={dish.id}
              styles={cardStyles}
              onClick={() => router.push(`/dish/${dish.id}`)}
            >
              <DocumentCardImage
                height={160}
                imageFit={ImageFit.cover}
                imageSrc={
                  dish.image_url ??
                  `https://source.unsplash.com/random/?${dish.name}&1`
                }
              />
              <DocumentCardTitle title={dish.name} shouldTruncate />
              <DocumentCardActivity
                activity={`${dish.region} • ${dish.course}`}
                people={[
                  {
                    name:
                      dish.diet === "vegetarian"
                        ? "Vegetarian"
                        : "Non-Vegetarian",
                    profileImageSrc: "",
                  },
                ]}
              />
            </DocumentCard>
          ))}
        </div>

        <Stack
          horizontalAlign="center"
          style={{ marginTop: "40px", marginBottom: "20px" }}
        >
          <PrimaryButton
            text="View All Dishes"
            onClick={() => router.push("/dishes")}
          />
        </Stack>
      </div>
    </div>
  );
};

export default HomePage;
