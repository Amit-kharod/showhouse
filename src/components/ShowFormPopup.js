import { Plus, X } from "lucide-react";
import "./ShowFormPopup.css";
import { useState } from "react";

function ShowFormPopup({ setIsShowFormOpen, showsData, setShowsData }) {
  const [showFormData, setShowFormData] = useState({
    ImageUrl: "",
    Name: "",
    IsShowRunning: "",
    StartedFrom: null,
    Till: null,
    Rating: null,
    Details: "",
  });

  const addShowHandler = (e) => {
    e.preventDefault();
    const period = `(${showFormData.StartedFrom}-${
      showFormData.IsShowRunning ? "PRESENT" : showFormData.Till
    })`;

    console.log({
      ImageUrl: showFormData.ImageUrl,
      Name: showFormData.Name,
      Period: period,
      Rating: showFormData.Rating,
      Details: showFormData.Details,
    });
    setShowsData([
      ...showsData,
      {
        ImageUrl: showFormData.ImageUrl,
        Name: showFormData.Name,
        Period: period,
        Rating: showFormData.Rating,
        Details: showFormData.Details,
      },
    ]);
    setIsShowFormOpen(false);
  };

  return (
    <div className="show-form-container">
      <form className="show-form">
        <X className="close-btn" onClick={() => setIsShowFormOpen(false)} />
        <h1>Add New Show</h1>
        <div className="input-container-hr">
          <label htmlFor="image-url">Image URL</label>
          <input
            className="input-box"
            type="text"
            id="image-url"
            onChange={(e) =>
              setShowFormData({
                ...showFormData,
                ImageUrl: e.target.value,
              })
            }
          />
        </div>
        <div className="input-container-hr">
          <label htmlFor="show-name">Show Name</label>
          <input
            className="input-box"
            type="text"
            id="show-name"
            onChange={(e) =>
              setShowFormData({
                ...showFormData,
                Name: e.target.value,
              })
            }
          />
        </div>
        <div className="input-container-vr">
          <input
            type="checkbox"
            id="show-running"
            onChange={(e) => {
              console.log(e.target.value);
              setShowFormData({
                ...showFormData,
                IsShowRunning: e.target.checked,
              });
            }}
          />
          <label htmlFor="show-running">Show is currently running</label>
        </div>
        <div className="input-container-hr">
          <label htmlFor="started-from-dropdown">Started from</label>
          <input
            className="input-box"
            type="number"
            id="started-from-dropdown"
            onChange={(e) =>
              setShowFormData({
                ...showFormData,
                StartedFrom: e.target.value,
              })
            }
          />
        </div>
        {!showFormData.IsShowRunning && (
          <div className="input-container-hr">
            <label htmlFor="started-from-dropdown">Till</label>
            <input
              className="input-box"
              type="number"
              id="started-from-dropdown"
              onChange={(e) =>
                setShowFormData({
                  ...showFormData,
                  Till: e.target.value,
                })
              }
            />
          </div>
        )}
        <div className="input-container-hr">
          <label htmlFor="show-rating">Rating</label>
          <input
            className="input-box"
            type="text"
            id="show-rating"
            onChange={(e) =>
              setShowFormData({
                ...showFormData,
                Rating: e.target.value,
              })
            }
          />
        </div>
        <div className="input-container-hr">
          <label htmlFor="details">Details</label>
          <input
            className="input-box"
            type="text"
            id="details"
            onChange={(e) =>
              setShowFormData({
                ...showFormData,
                Details: e.target.value,
              })
            }
          />
        </div>
        <button type="submit" className="add-show-btn" onClick={addShowHandler}>
          <Plus />
          <span>Add</span>
        </button>
      </form>
    </div>
  );
}

export default ShowFormPopup;
