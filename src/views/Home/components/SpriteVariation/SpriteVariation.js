import "./SpriteVariation.scss";

import NewSprites from "../../../../Assets/FromOldJson.json";
import { forifier } from "../../../../Util/forifier";
import { useImgLoading } from "../../../../hooks/useImgLoading";

function SpriteVariation({ iconFocus, seticonFocus, id }) {
  const { startImgLoading } = useImgLoading();
  return (
    <>
      <span
        className={`fa fa-star fa-star__${iconFocus[0]}`}
        aria-hidden="true"
        onClick={() => {
          startImgLoading();
          if (!iconFocus[0].includes("disabled")) {
            if (iconFocus[0].includes("OffFocus")) {
              seticonFocus([
                "OnFocus",
                iconFocus[1],
                iconFocus[2],
                iconFocus[3],
              ]);
            } else {
              seticonFocus([
                "OffFocus",
                iconFocus[1],
                iconFocus[2],
                iconFocus[3],
              ]);
            }
          }
        }}
      />
      <span
        className={`fa fa-mars fa-mars__${iconFocus[1]}`}
        aria-hidden="true"
        onClick={() => {
          startImgLoading();
          if (!iconFocus[1].includes("disabled")) {
            if (iconFocus[1].includes("OffFocus")) {
              seticonFocus([
                iconFocus[0],
                "OnFocus",
                iconFocus[2],
                iconFocus[3],
              ]);
              if (!iconFocus[3].includes("disabled")) {
                if (
                  // If Giga is active and Pokemon has _mf_ variation
                  // turn off giga when Male variation is active
                  iconFocus[3].includes("OnFocus") &&
                  NewSprites[forifier(id)]["Sprites"]["GigaNormal"].includes(
                    "_mf_"
                  )
                ) {
                  seticonFocus([
                    iconFocus[0],
                    "OnFocus",
                    iconFocus[2],
                    "OffFocus",
                  ]);
                } else {
                  seticonFocus([
                    iconFocus[0],
                    "OnFocus",
                    iconFocus[2],
                    "OffFocus",
                  ]);
                }
              }
              if (iconFocus[2].includes("OnFocus")) {
                seticonFocus([
                  iconFocus[0],
                  "OnFocus",
                  "OffFocus",
                  iconFocus[3],
                ]);
              }
            } else {
              seticonFocus([
                iconFocus[0],
                "OffFocus",
                iconFocus[2],
                iconFocus[3],
              ]);
            }
          }
        }}
      />
      <span
        className={`fa fa-venus fa-venus__${iconFocus[2]}`}
        aria-hidden="true"
        onClick={() => {
          startImgLoading();
          if (!iconFocus[2].includes("disabled")) {
            if (iconFocus[2].includes("OffFocus")) {
              seticonFocus([
                iconFocus[0],
                iconFocus[1],
                "OnFocus",
                iconFocus[3],
              ]);
              if (!iconFocus[3].includes("disabled")) {
                if (
                  iconFocus[3].includes("OnFocus") &&
                  NewSprites[forifier(id)]["Sprites"]["GigaNormal"].includes(
                    "_mf_"
                  )
                ) {
                  seticonFocus([
                    iconFocus[0],
                    iconFocus[1],
                    "OnFocus",
                    "OffFocus",
                  ]);
                } else {
                  seticonFocus([
                    iconFocus[0],
                    iconFocus[1],
                    "OnFocus",
                    iconFocus[3],
                  ]);
                }
              }
            } else {
              seticonFocus([
                iconFocus[0],
                iconFocus[1],
                "OffFocus",
                iconFocus[3],
              ]);
            }
            if (iconFocus[1].includes("OnFocus")) {
              seticonFocus([iconFocus[0], "OffFocus", "OnFocus", iconFocus[3]]);
            }
          }
        }}
      />
      <span
        className={`fa fa-g fa-g__${iconFocus[3]}`}
        aria-hidden="true"
        onClick={() => {
          startImgLoading();
          if (!iconFocus[3].includes("disabled")) {
            if (iconFocus[3].includes("OffFocus")) {
              // If Male variation is active and giga is NoGen, Remove avtive state of male
              if (
                iconFocus[1].includes("OnFocus") &&
                NewSprites[forifier(id)]["Sprites"]["GigaNormal"].includes(
                  "_mf_"
                )
              ) {
                seticonFocus([
                  iconFocus[0],
                  "OffFocus",
                  iconFocus[2],
                  "OnFocus",
                ]);
              } else if (
                iconFocus[2].includes("OnFocus") &&
                NewSprites[forifier(id)]["Sprites"]["GigaNormal"].includes(
                  "_mf_"
                )
              ) {
                seticonFocus([
                  iconFocus[0],
                  iconFocus[1],
                  "OffFocus",
                  "OnFocus",
                ]);
              } else {
                seticonFocus([
                  iconFocus[0],
                  iconFocus[1],
                  iconFocus[2],
                  "OnFocus",
                ]);
              }
            } else {
              seticonFocus([
                iconFocus[0],
                iconFocus[1],
                iconFocus[2],
                "OffFocus",
              ]);
            }
          }
        }}
      >
        G
      </span>
    </>
  );
}

export default SpriteVariation;