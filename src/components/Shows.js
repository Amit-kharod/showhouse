import Show from "./Show";
import "./Shows.css"

function Shows() {

  const ShowsData = [
    {
      ImageUrl:
        "https://ik.imagekit.io/rancholabs/Showhouse/shinchan.png?updatedAt=1708447959832",
      Name: "Shinchan",
      Period: "(1992- )",
      Rating: 8.4,
      Details:
        "Shinchan is the naughtiest 5-year-old boy around. He is smitten with older women, an urge he never manages to saturate. This page covers the original Japanese version as aired in Japan.",
    },
    {
      ImageUrl:
        "https://ik.imagekit.io/rancholabs/Showhouse/tom_and_jerry.png?updatedAt=1708447896182",
      Name: "Tom and Jerry Tales",
      Period: "(2006-2009)",
      Rating: 7.4,
      Details: "Tom and Jerry return with vengeance in this new show.",
    },
    {
      ImageUrl:
        "https://ik.imagekit.io/rancholabs/Showhouse/chhota_bheem.png?updatedAt=1708447927692",
      Name: "Chhota Bheem",
      Period: "(2008- )",
      Rating: 4.6,
      Details:
        "Chhota Bheem is an Indian animated series adventures about a boy named Bheem and his friends in the fictional village of Dholakpur. Bheem and his friends are usually involved in protecting the village from various evil forces.",
    },
    {
      ImageUrl:
        "https://ik.imagekit.io/rancholabs/Showhouse/oggy.png?updatedAt=1708447878036",
      Name: "Oggy and the Cockroaches",
      Period: "(1997-2018)",
      Rating: 7.5,
      Details:
        "Oggy would be the happiest of cats if three cockroaches hadn't decided to settle inside his comfortable home.",
    },
    {
      ImageUrl:
        "https://ik.imagekit.io/rancholabs/Showhouse/rool_no_21.png?updatedAt=1708447862874",
      Name: "Roll No. 21",
      Period: "(2010- )",
      Rating: 6.2,
      Details:
        "Kansa, the evil king of Mathura, returns to Earth as Kanishk to finally conquer and reign supreme over the land. Masking his cruel intentions under the disguise of a great humanitarian and ... See full summary.",
    },
    {
      ImageUrl:
        "https://ik.imagekit.io/rancholabs/Showhouse/motu_patlu.png?updatedAt=1708447943995",
      Name: "Motu Patlu",
      Period: "(2012- )",
      Rating: 5.4,
      Details:
        "Motu and Patlu, two friends living in Fufuri Nagar, always get themselves into hilarious situations and later rescued merely by luck, using the help from Ghasita Ram, Inspector Chingam and Dr. Jhatka.",
    },
    {
      ImageUrl:
        "https://ik.imagekit.io/rancholabs/Showhouse/doraemon.png?updatedAt=1708447911891",
      Name: "Doraemon",
      Period: "(2005- )",
      Rating: 8.3,
      Details:
        "The misadventures of Doraemon, a robot cat from the future, who with his gadgets, is sent back in time to help make Nobita Nobi, a boy without much talent, a better person.",
    },
  ];

  return (
    <div className="shows">
      {ShowsData.map((show) => {
        const startedFrom = show.Period.split("-")[0].slice(1);
        let till = show.Period.split("-")[1].slice(0, -1);

        if (till.length < 2) {
          till = "PRESENT";
        }

        return (
          <Show
            key={show.Name}
            imageURL={show.ImageUrl}
            name={show.Name}
            rating={show.Rating}
            startedFrom={startedFrom}
            till={till}
          />
        );
      })}
    </div>
  );
}

export default Shows;
