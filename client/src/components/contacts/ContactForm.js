import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, updateContact, clearCurrent, current } = contactContext;
  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        age: "",
        sex: "",
        occupation: "",
        phone: "",
        rocular: "",
        locular: "",
        rlids: "",
        llids: "",
        rconjunetiva: "",
        lconjunetiva: "",
        lcornea: "",
        rcornea: "",
        lanterior: "",
        ranterior: "",
        liris: "",
        riris: "",
        lpupil: "",
        rpupil: "",
        llens: "",
        rlens: "",
        lvitreous: "",
        rvitreous: "",
        lfundus: "",
        rfundus: "",
        loldpower: "",
        roldpower: "",
        lva: "",
        rva: "",
        lvaold: "",
        rvaold: "",
        larreading: "",
        rarreading: "",
        lst: "",
        rst: "",
        liop: "",
        riop: "",
        colorvision: "",
        lvisualfields: "",
        rvisualfields: "",
        ltreatment: "",
        rtreatment: "",
        followup: ""
      });
    }
  }, [contactContext, current]);
  const [contact, setContact] = useState({
    name: "",
    age: "",
    sex: "",
    occupation: "",
    phone: "",
    rocular: "",
    locular: "",
    rlids: "",
    llids: "",
    rconjunetiva: "",
    lconjunetiva: "",
    lcornea: "",
    rcornea: "",
    lanterior: "",
    ranterior: "",
    liris: "",
    riris: "",
    lpupil: "",
    rpupil: "",
    llens: "",
    rlens: "",
    lvitreous: "",
    rvitreous: "",
    lfundus: "",
    rfundus: "",
    loldpower: "",
    roldpower: "",
    lva: "",
    rva: "",
    lvaold: "",
    rvaold: "",
    larreading: "",
    rarreading: "",
    lst: "",
    rst: "",
    liop: "",
    riop: "",
    colorvision: "",
    lvisualfields: "",
    rvisualfields: "",
    ltreatment: "",
    rtreatment: "",
    followup: ""
  });

  const {
    name,
    age,
    sex,
    occupation,
    phone,
    rocular,
    locular,
    rlids,
    llids,
    rconjunetiva,
    lconjunetiva,
    lcornea,
    rcornea,
    lanterior,
    ranterior,
    liris,
    riris,
    lpupil,
    rpupil,
    llens,
    rlens,
    lvitreous,
    rvitreous,
    lfundus,
    rfundus,
    loldpower,
    roldpower,
    lva,
    rva,
    lvaold,
    rvaold,
    larreading,
    rarreading,
    lst,
    rst,
    liop,
    riop,
    colorvision,
    lvisualfields,
    rvisualfields,
    ltreatment,
    rtreatment,
    followup
  } = contact;
  //doubt...
  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();

    // setContact({
    //   name: "",
    //   age: "",
    //   sex: "",
    //   occupation: "",
    //   phone: "",
    //   rocular: "",
    //   locular: "",
    //   rlids: "",
    //   llids: "",
    //   rconjunetiva: "",
    //   lconjunetiva: "",
    //   lcornea: "",
    //   rcornea: "",
    //   lanterior: "",
    //   ranterior: "",
    //   liris: "",
    //   riris: "",
    //   lpupil: "",
    //   rpupil: "",
    //   llens: "",
    //   rlens: "",
    //   lvitreous: "",
    //   rvitreous: "",
    //   lfundus: "",
    //   rfundus: "",
    //   loldpower: "",
    //   roldpower: "",
    //   lva: "",
    //   rva: "",
    //   lvaold: "",
    //   rvaold: "",
    //   larreading: "",
    //   rarreading: "",
    //   lst: "",
    //   rst: "",
    //   liop: "",
    //   riop: "",
    //   colorvision: "",
    //   lvisualfields: "",
    //   rvisualfields: "",
    //   ltreatment: "",
    //   rtreatment: "",
    //   followup: ""
    // });
  };

  const clearAll = () => {
    clearCurrent();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2 className="text-primary">
          {" "}
          {current ? "Update user" : "Add a user"}{" "}
        </h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Age"
          name="age"
          value={age}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Gender"
          name="sex"
          value={sex}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="Occupation"
          name="occupation"
          value={occupation}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={onChange}
        />

        {current && (
          <div>
            <button className="btn btn-light btn-block" onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </form>

      {/*Left Eye Data*/}
      <form onSubmit={onSubmit}>
        <h2 className="text-primary">
          {" "}
          {current ? "Update Left Eye Data" : "Left Eye"}{" "}
        </h2>

        <input
          type="text"
          placeholder="Eye Lids"
          name="llids"
          value={llids}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="Conjunetiva"
          name="lconjunetiva"
          value={lconjunetiva}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="Cornea"
          name="lcornea"
          value={lcornea}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="Anterior Chamber"
          name="lanterior"
          value={lanterior}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="Iris"
          name="liris"
          value={liris}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="Pupil"
          name="lpupil"
          value={lpupil}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="Lens"
          name="llens"
          value={llens}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="Vitreous"
          name="lvitreous"
          value={lvitreous}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="Fundus"
          name="lfundus"
          value={lfundus}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="Old Power"
          name="loldpower"
          value={loldpower}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="VA"
          name="lva"
          value={lva}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="Old VA"
          name="lvaold"
          value={lvaold}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="AR-Reading"
          name="larreading"
          value={larreading}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="ST"
          name="lst"
          value={lst}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="IOP"
          name="liop"
          value={liop}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Colorvision"
          name="colorvision"
          value={colorvision}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="Visual Fields"
          name="lvisualfields"
          value={lvisualfields}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="Treatment"
          name="ltreatment"
          value={ltreatment}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Followup"
          name="followup"
          value={followup}
          onChange={onChange}
        />
        <div>
          <input
            type="submit"
            value={current ? "Update user" : "Add a user"}
            className="btn btn-primary btn-block"
          />
        </div>
        {current && (
          <div>
            <button className="btn btn-light btn-block" onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </form>

      {/* Right Eye Data */}

      <form onSubmit={onSubmit}>
        <h2 className="text-primary">
          {" "}
          {current ? "Update Right Eye Data" : "Right Eye"}{" "}
        </h2>

        <input
          type="text"
          placeholder="Eye Lids"
          name="rlids"
          value={rlids}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="Conjunetiva"
          name="rconjunetiva"
          value={rconjunetiva}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="Cornea"
          name="rcornea"
          value={rcornea}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="Anterior Chamber"
          name="ranterior"
          value={ranterior}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="Iris"
          name="riris"
          value={riris}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="Pupil"
          name="rpupil"
          value={rpupil}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="Lens"
          name="rlens"
          value={rlens}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="Vitreous"
          name="rvitreous"
          value={rvitreous}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="Fundus"
          name="rfundus"
          value={rfundus}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="Old Power"
          name="roldpower"
          value={roldpower}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="VA"
          name="rva"
          value={rva}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="Old VA"
          name="rvaold"
          value={rvaold}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="AR-Reading"
          name="rarreading"
          value={rarreading}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="ST"
          name="rst"
          value={rst}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="IOP"
          name="riop"
          value={riop}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Colorvision"
          name="colorvision"
          value={colorvision}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="Visual Fields"
          name="rvisualfields"
          value={rvisualfields}
          onChange={onChange}
        />

        <input
          type="text"
          placeholder="Treatment"
          name="rtreatment"
          value={rtreatment}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Followup"
          name="followup"
          value={followup}
          onChange={onChange}
        />
        <div>
          <input
            type="submit"
            value={current ? "Update user" : "Add a user"}
            className="btn btn-primary btn-block"
          />
        </div>
        {current && (
          <div>
            <button className="btn btn-light btn-block" onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
