import React from "react";
import { Link, useLocation } from "react-router";
import {
  ChipDirective,
  ChipListComponent,
  ChipsDirective,
} from "@syncfusion/ej2-react-buttons";
import { cn, getFirstWord } from "assets/lib/utils";
const TripCard = ({
  id,
  name,
  location,
  imageUrl,
  tags,
  price,
}: TripCardProps) => {
  const path = useLocation();
  return (
    <Link
      className="trip-card"
      to={
        path.pathname === "/" || path.pathname.startsWith("/travel")
          ? `/trips/${id} `
          : `/trips/${id}`
      }
    >
      <img src={imageUrl} alt={name} />
      <article>
        <h2>{name}</h2>
        <figure>
          <img
            className="size-4"
            src="/assets/icons/location-mark.svg"
            alt="location"
          />
          <figcaption>{location}</figcaption>
        </figure>
      </article>
      <div className="mt-5 pl-[18px] pr-3.5 pb-5">
        <ChipListComponent id="travel-chip">
          <ChipsDirective>
            {tags?.map((tag, index) => (
              <ChipDirective
                cssClass={cn(
                  index === 1
                    ? "!bg-pink-50 !text-pink-500"
                    : "bg-success-50 !text-success-700"
                )}
                key={index}
                text={getFirstWord(tag)}
              />
            ))}
          </ChipsDirective>
        </ChipListComponent>
      </div>
      <article className="tripCard-pill">{price}</article>
    </Link>
  );
};

export default TripCard;
