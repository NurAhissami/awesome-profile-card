import Card from "./Card";
import Form from "./Form";
import { useState, useEffect } from "react";
import ls from "../services/localstorage";
import api from "../services/api";

function Main() {
  const localStorageForm = ls.get("form") || {};

  const [status, setStatus] = useState("No enviado"); // "No enviado", "Me ha dado error", "Me ha dado ok"
  const [cardURL, setURL] = useState("");

  const [form, setForm] = useState(
    localStorageForm.form || {
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      photo: "",
      palette: "1",
    }
  );

  useEffect(() => {
    ls.set("form", { form });
  }, [form]);

  const handleReset = () => {
    setForm({
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      photo: "",
      palette: "1",
    });
    localStorage.clear();
  };

  const handleOnKeyUp = (ev) => {
    setForm({ ...form, [ev.target.name]: ev.target.value });
  };

  const handleOnChange = (ev) => {
    setForm({ ...form, [ev.target.name]: ev.target.value });
  };

  const updateAvatar = (avatar) => {
    //setAvatar(avatar);
    setForm({
      ...form,
      photo: avatar,
    });
  };

  const handleCreateCard = () => {
    api(form).then((resultCard) => {
      const result = resultCard.cardURL;
      if (resultCard.success === false) {
        setStatus("Me ha dado error");
      } else {
        setStatus("Me ha dado ok");
        setURL(result);
      }
    });
  };

  return (
    <main className="main_card--background">
      <div className="main_card">
        <Card {...form} handleOnClickReset={handleReset} />
        <Form
          handleCreatedCard={handleCreateCard}
          status={status}
          cardURL={cardURL}
          updateAvatar={updateAvatar}
          {...form}
          onKeyUp={handleOnKeyUp}
          onClick={handleOnChange}
        />
      </div>
    </main>
  );
}

export default Main;
