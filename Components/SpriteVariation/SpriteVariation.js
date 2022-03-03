import styles from "./SpriteVariation.module.scss";

function SpriteVariation({ iconFocus, setIconFocus, NewSprites }) {
  return (
    <>
      <button
        tabIndex={0}
        title="Shiny"
        className={`fa fa-star ${styles.fa} ${styles.fa__star} ${
          iconFocus[0].includes("OnFocus")
            ? styles.fa__star__OnFocus
            : styles.fa__star__OffFocus
        } ${iconFocus[0].includes("disabled") ? styles.disabled : ""}`}
        onClick={() => {
          if (!iconFocus[0].includes("disabled")) {
            if (iconFocus[0].includes("OffFocus")) {
              setIconFocus([
                "OnFocus",
                iconFocus[1],
                iconFocus[2],
                iconFocus[3],
              ]);
            } else {
              setIconFocus([
                "OffFocus",
                iconFocus[1],
                iconFocus[2],
                iconFocus[3],
              ]);
            }
          } else {
          }
        }}
      />
      <button
        title="Male"
        tabIndex={0}
        className={`fa fa-mars ${styles.fa} ${styles.fa__mars} ${
          iconFocus[1].includes("OnFocus")
            ? styles.fa__mars__OnFocus
            : styles.fa__mars__OffFocus
        } ${iconFocus[1].includes("disabled") ? styles.disabled : ""}`}
        onClick={() => {
          if (!iconFocus[1].includes("disabled")) {
            if (iconFocus[1].includes("OffFocus")) {
              setIconFocus([
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
                  NewSprites["Sprites"]["GigaNormal"].includes("_mf_")
                ) {
                  setIconFocus([
                    iconFocus[0],
                    "OnFocus",
                    iconFocus[2],
                    "OffFocus",
                  ]);
                } else {
                  setIconFocus([
                    iconFocus[0],
                    "OnFocus",
                    iconFocus[2],
                    "OffFocus",
                  ]);
                }
              }
              if (iconFocus[2].includes("OnFocus")) {
                setIconFocus([
                  iconFocus[0],
                  "OnFocus",
                  "OffFocus",
                  iconFocus[3],
                ]);
              }
            } else {
              if (
                "NoGenNormal" in NewSprites["Sprites"] ||
                "NoGenShiny" in NewSprites["Sprites"]
              ) {
                setIconFocus([
                  iconFocus[0],
                  "OffFocus",
                  iconFocus[2],
                  iconFocus[3],
                ]);
              } else {
              }
            }
          } else {
          }
        }}
      />
      <button
        title="Female"
        tabIndex={0}
        className={`fa fa-venus ${styles.fa} ${styles.fa__venus} ${
          iconFocus[2].includes("OnFocus")
            ? styles.fa__venus__OnFocus
            : styles.fa__venus__OffFocus
        } ${iconFocus[2].includes("disabled") ? styles.disabled : ""}`}
        onClick={() => {
          if (!iconFocus[2].includes("disabled")) {
            if (iconFocus[2].includes("OffFocus")) {
              setIconFocus([
                iconFocus[0],
                iconFocus[1],
                "OnFocus",
                iconFocus[3],
              ]);
              if (!iconFocus[3].includes("disabled")) {
                if (
                  iconFocus[3].includes("OnFocus") &&
                  NewSprites["Sprites"]["GigaNormal"].includes("_mf_")
                ) {
                  setIconFocus([
                    iconFocus[0],
                    iconFocus[1],
                    "OnFocus",
                    "OffFocus",
                  ]);
                } else {
                  setIconFocus([
                    iconFocus[0],
                    iconFocus[1],
                    "OnFocus",
                    iconFocus[3],
                  ]);
                }
              }
            } else {
              if (
                "NoGenNormal" in NewSprites["Sprites"] ||
                "NoGenShiny" in NewSprites["Sprites"]
              ) {
                setIconFocus([
                  iconFocus[0],
                  iconFocus[1],
                  "OffFocus",
                  iconFocus[3],
                ]);
              } else {
              }
            }
            if (iconFocus[1].includes("OnFocus")) {
              setIconFocus([iconFocus[0], "OffFocus", "OnFocus", iconFocus[3]]);
            }
          } else {
          }
        }}
      />
      <button
        title="Giga"
        tabIndex={0}
        className={`${styles.fa} ${styles.fa__g} ${
          iconFocus[3].includes("OnFocus")
            ? styles.fa__g__OnFocus
            : styles.fa__g__OffFocus
        } ${iconFocus[3].includes("disabled") ? styles.disabled : ""}`}
        onClick={() => {
          if (!iconFocus[3].includes("disabled")) {
            if (iconFocus[3].includes("OffFocus")) {
              // If Male variation is active and giga is NoGen, Remove avtive state of male
              if (
                iconFocus[1].includes("OnFocus") &&
                NewSprites["Sprites"]["GigaNormal"].includes("_mf_")
              ) {
                setIconFocus([
                  iconFocus[0],
                  "OffFocus",
                  iconFocus[2],
                  "OnFocus",
                ]);
              } else if (
                iconFocus[2].includes("OnFocus") &&
                NewSprites["Sprites"]["GigaNormal"].includes("_mf_")
              ) {
                setIconFocus([
                  iconFocus[0],
                  iconFocus[1],
                  "OffFocus",
                  "OnFocus",
                ]);
              } else {
                setIconFocus([
                  iconFocus[0],
                  iconFocus[1],
                  iconFocus[2],
                  "OnFocus",
                ]);
              }
            } else {
              setIconFocus([
                iconFocus[0],
                iconFocus[1],
                iconFocus[2],
                "OffFocus",
              ]);
            }
          } else {
          }
        }}
      >
        G
      </button>
    </>
  );
}

export default SpriteVariation;
