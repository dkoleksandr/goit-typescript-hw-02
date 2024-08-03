import { Field, Form, Formik, FormikHelpers, FormikValues } from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
};

interface FormValues {
  query: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    if (!values.query.trim()) {
      toast.error("Please enter a search value.");
      return;
    }

    onSubmit(values.query);
    actions.resetForm();
  };

  return (
    <header className={css.searchBar}>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      <Toaster></Toaster>
    </header>
  );
};

export default SearchBar;
