import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { selectFilters, selectPrice } from "../../redux/campers/selectors";
import { clearItems, setFilters, setPrice } from "../../redux/campers/slice";
import icons from "../../assets/sprite.svg";
import { useState } from "react";
import css from "./SideBar.module.css";
import Button from "../Button/Button";

const LocationSchema = Yup.object().shape({
  location: Yup.string(),
});

export default function SideBar() {
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={css.container}>
      <Formik
        initialValues={{
          location: filters.location,
          equipment: filters.equipment,
          form: filters.form,
          price: filters.price,
        }}
        validationSchema={LocationSchema}
        onSubmit={(values) => {
          dispatch(clearItems());
          dispatch(setFilters(values));
        }}
      >
        <Form>
          <div>
            <div>
              <label htmlFor="location">Location</label>
              <p className={css.mapIconParent}>
                <svg className={css.mapIcon} width={20} height={20}>
                  <use href={`${icons}#icon-map`}></use>
                </svg>
              </p>
              <Field className={css.locationInput} as="select" name="location">
                <option value="">Choose a city</option>
                <option value="Ukraine, Kyiv">Kyiv</option>
                <option value="Ukraine, Odesa">Odesa</option>
                <option value="Ukraine, Kharkiv">Kharkiv</option>
                <option value="Ukraine, Lviv">Lviv</option>
                <option value="Ukraine, Sumy">Sumy</option>
                <option value="Ukraine, Dnipro">Dnipro</option>
              </Field>
            </div>
            <div>
              <p className={css.filtersCont}>Filters</p>
              <h4 className={css.equipTitle}>Vehicle equipment</h4>
              <div className={css.equipList}>
                <label className={css.label}>
                  <Field
                    type="checkbox"
                    name="equipment"
                    value="ac"
                    className={css.input}
                  />
                  <p className={css.iconCont}>
                    <svg width="32" height="32" className={css.icon}>
                      <use href={`${icons}#icon-ac`}></use>
                    </svg>
                    AC
                  </p>
                </label>
                <label className={css.label}>
                  <Field
                    type="checkbox"
                    name="equipment"
                    value="automatic"
                    className={css.input}
                  />
                  <p className={css.iconCont}>
                    <svg className={css.icon} width="32" height="32">
                      <use href={`${icons}#icon-automatic`}></use>
                    </svg>
                    Automatic
                  </p>
                </label>
                <label className={css.label}>
                  <Field
                    type="checkbox"
                    name="equipment"
                    value="kitchen"
                    className={css.input}
                  />
                  <p className={css.iconCont}>
                    <svg width="32" height="32" className={css.icon}>
                      <use href={`${icons}#icon-kitchen`}></use>
                    </svg>
                    Kitchen
                  </p>
                </label>
                <label className={css.label}>
                  <Field
                    type="checkbox"
                    name="equipment"
                    value="tv"
                    className={css.input}
                  />
                  <p className={css.iconCont}>
                    <svg width="32" height="32" className={css.icon}>
                      <use href={`${icons}#icon-tv`}></use>
                    </svg>
                    TV
                  </p>
                </label>
                <label className={css.label}>
                  <Field
                    type="checkbox"
                    name="equipment"
                    value="bathroom"
                    className={css.input}
                  />
                  <p className={css.iconCont}>
                    <svg width="32" height="32" className={css.icon}>
                      <use href={`${icons}#icon-bath`}></use>
                    </svg>
                    Bathroom
                  </p>
                </label>
              </div>
              <h4 className={css.typeTitle}>Vehicle type</h4>
              <div className={css.typeList}>
                <label className={css.labelRadio}>
                  <Field
                    type="radio"
                    name="form"
                    value="panelTruck"
                    className={css.input}
                  />
                  <p className={css.iconCont}>
                    <svg width="32" height="32">
                      <use href={`${icons}#icon-van`}></use>
                    </svg>
                    Van
                  </p>
                </label>
                <label className={css.labelRadio}>
                  <Field
                    type="radio"
                    name="form"
                    value="fullyIntegrated"
                    className={css.input}
                  />
                  <p className={css.iconCont}>
                    <svg width="32" height="32">
                      <use href={`${icons}#icon-fully-integrated`}></use>
                    </svg>
                    Fully Integrated
                  </p>
                </label>
                <label className={css.labelRadio}>
                  <Field
                    type="radio"
                    name="form"
                    value="alcove"
                    className={css.input}
                  />
                  <p className={css.iconCont}>
                    <svg width="32" height="32">
                      <use href={`${icons}#icon-alcove`}></use>
                    </svg>
                    Alcove
                  </p>
                </label>
              </div>
            </div>
            <div className={css.priceCont}>
              <label className={css.price} htmlFor="price">
                Price {value ? <span>{value} </span> : <span>0 - 15000</span>}
              </label>
              <Field
                type="range"
                className={css.range}
                name="price"
                min={0}
                step={1000}
                max={15000}
                id="myRange"
                onInput={handleInput}
              ></Field>
            </div>
            <div className={css.btnCont}>
              <Button type="submit">Search</Button>
              <button className={css.btn} type="reset">
                Clear
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
