// npm imports
import { useEffect, useState } from "react";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

// css
import styles from "./NewActivity.module.css";

const NewActivity = (props) => {
  const [showForm, setShowForm] = useState(false);

  const toggle = async () => {
    showForm ? setShowForm(false) : setShowForm(true);
  };

  const [formData, setFormData] = useState({
    category: "Activity",
    activityName: "",
    activityDate: "",
    activityWebsite: "",
    notes: "",
    cost: "",
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddAccommodation(formData);
    setFormData({
      category: "Activity",
      name: "",
      activityDate: "",
      activityWebsite: "",
      notes: "",
      cost: "",
    });
  };

  return (
    <>
      <div>
        <FormGroup className={styles.toggleFormContainer}>
          <FormControlLabel
            control={<Switch onChange={toggle} className={styles.toggle} />}
            label={`${showForm ? "" : "Add Activity"}`}
            labelPlacement="top"
            className={styles.toggleContainer}
          />
        </FormGroup>
        {showForm ? (
          <form
            className={`${styles.container} ${!showForm && styles.hidden}`}
            onSubmit={handleSubmit}
          >
            <h2>Activity</h2>
            <label htmlFor="type-input">Category</label>
            <select
              name="category"
              id="type-input"
              value={formData.category}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="Activity">Activity</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Landmark">Landmark</option>
              <option value="Nightlife">Nightlife</option>
            </select>
            <label htmlFor="name">Activity</label>
            <input
              type="text"
              name="name"
              id="name-input"
              value={formData.name}
              autoComplete="off"
              onChange={handleChange}
              className={styles.input}
            />
            <label htmlFor="activityDate">Activity Date</label>
            <input
              required
              type="datetime-local"
              name="activityDate"
              id="activityDate-input"
              value={formData.activityDate}
              onChange={handleChange}
              className={styles.input}
            />
            <label htmlFor="activityWebsite">Activity Website</label>
            <input
              type="text"
              name="activityWebsite"
              id="activityWebsite-input"
              value={formData.activityWebsite}
              autoComplete="off"
              onChange={handleChange}
              className={styles.input}
            />
            <label htmlFor="notes">Notes</label>
            <input
              type="text"
              name="notes"
              id="notes-input"
              value={formData.notes}
              autoComplete="off"
              onChange={handleChange}
              className={styles.input}
            />
            <label htmlFor="cost">Cost</label>
            <input
              type="text"
              name="cost"
              id="cost-input"
              value={formData.cost}
              autoComplete="off"
              onChange={handleChange}
              className={styles.input}
            />
            <button type="submit">SUBMIT</button>
          </form>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default NewActivity;
