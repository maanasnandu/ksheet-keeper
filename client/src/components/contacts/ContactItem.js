import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const {
    _id,
    name,
    age,
    sex,
    occupation,
    phone,
    locular,
    rocular,
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
    rlens,
    llens,
    rvitreous,
    lvitreous,
    lfundus,
    rfundus,
    loldpower,
    roldpower,
    lva,
    rva,
    larreading,
    rarreading,
    rst,
    lst,
    liop,
    riop,
    colorvision,
    rvisualfields,
    lvisualfields,
    rtreatment,
    ltreatment,
    followup
  } = contact;
  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };
  return (
    <div>
      <div className="card bg-light">
        <ul className="list">
          {name && (
            <li>
              <i className="fas fa-user-circle" /> Name: {name}
            </li>
          )}
          {age && (
            <li>
              <i className="fas fa-id-card-alt" /> Age: {age}
            </li>
          )}
          {sex && (
            <li>
              <i className="fas fa-venus-mars" />
              Gender: {sex}
            </li>
          )}
          {occupation && (
            <li>
              <i className="fas fa-briefcase" />
              Occupation: {occupation}
            </li>
          )}

          {phone && (
            <li>
              <i className="fas fa-phone" />
              Contact: {phone}
            </li>
          )}
        </ul>

        <p>
          <button
            className="btn btn-dark btn-sm"
            onClick={() => setCurrent(contact)}
          >
            Edit
          </button>
          <button className="btn btn-danger btn-sm" onClick={onDelete}>
            Delete
          </button>
        </p>
      </div>

      <div className="card bg-dark">
        <ul className="list" title="Vision Test Results">
          {locular && (
            <li>
              <i className="fas fa-caret-left" />
              Left Ocular Movement: {locular}
            </li>
          )}

          {rocular && (
            <li>
              <i className="fas fa-caret-right" />
              Right Ocular Movement: {rocular}
            </li>
          )}
          {llids && (
            <li>
              <i className="fas fa-notes-medical" />
              Left Lids and Adnexae: {llids}
            </li>
          )}
          {rlids && (
            <li>
              <i className="fas fa-notes-medical" />
              Right Lids and Adnexae: {rlids}
            </li>
          )}
          {lconjunetiva && (
            <li>
              <i className="fas fa-notes-medical" />
              Left Conjunetiva: {lconjunetiva}
            </li>
          )}
          {rconjunetiva && (
            <li>
              <i className="fas fa-notes-medical" />
              Right Conjunetiva: {rconjunetiva}
            </li>
          )}
          {lcornea && (
            <li>
              <i className="far fa-eye" />
              Left Cornea: {lcornea}
            </li>
          )}

          {rcornea && (
            <li>
              <i className="far fa-eye" />
              Right Cornea: {rcornea}
            </li>
          )}

          {lanterior && (
            <li>
              <i className="fas fa-angle-left" />
              Left Anterior Chamber: {lanterior}
            </li>
          )}

          {ranterior && (
            <li>
              <i className="fas fa-angle-right" />
              Right Anterior Chamber: {ranterior}
            </li>
          )}

          {liris && (
            <li>
              <i className="fas fa-angle-left" />
              Left Iris: {liris}
            </li>
          )}

          {riris && (
            <li>
              <i className="fas fa-angle-right" />
              Right Iris: {riris}
            </li>
          )}

          {lpupil && (
            <li>
              <i className="fas fa-angle-left" />
              Left Pupil: {lpupil}
            </li>
          )}

          {rpupil && (
            <li>
              <i className="fas fa-angle-right" />
              Right Pupil: {rpupil}
            </li>
          )}

          {llens && (
            <li>
              <i className="fas fa-angle-left" />
              Left Lens: {llens}
            </li>
          )}
          {rlens && (
            <li>
              <i className="fas fa-angle-right" />
              Right Lens: {rlens}
            </li>
          )}

          {lvitreous && (
            <li>
              <i className="fas fa-angle-left" />
              Left Vitreous: {lvitreous}
            </li>
          )}

          {rvitreous && (
            <li>
              <i className="fas fa-angle-right" />
              Right Vitreous: {rvitreous}
            </li>
          )}

          {lfundus && (
            <li>
              <i className="fas fa-angle-left" />
              Left Fundus: {lfundus}
            </li>
          )}
          {rfundus && (
            <li>
              <i className="fas fa-angle-right" />
              Right Fundus: {rfundus}
            </li>
          )}
          {loldpower && (
            <li>
              <i className="fas fa-angle-left" />
              Left Eye Old Power: {loldpower}
            </li>
          )}
          {roldpower && (
            <li>
              <i className="fas fa-angle-right" />
              Right Eye Old Power: {roldpower}
            </li>
          )}
          {lva && (
            <li>
              <i className="fas fa-angle-left" />
              Left Eye VA: {lva}
            </li>
          )}
          {rva && (
            <li>
              <i className="fas fa-angle-right" />
              Right Eye VA: {rva}
            </li>
          )}
          {larreading && (
            <li>
              <i className="fas fa-angle-left" />
              Left Eye AR Reading: {larreading}
            </li>
          )}
          {rarreading && (
            <li>
              <i className="fas fa-angle-right" />
              Right Eye AR Reading: {rarreading}
            </li>
          )}
          {lst && (
            <li>
              <i className="fas fa-angle-left" />
              Left Eye ST: {lst}
            </li>
          )}
          {rst && (
            <li>
              <i className="fas fa-angle-right" />
              Right Eye ST: {rst}
            </li>
          )}

          {liop && (
            <li>
              <i className="fas fa-angle-left" />
              Left Eye IOP: {liop}
            </li>
          )}
          {riop && (
            <li>
              <i className="fas fa-angle-right" />
              Right Eye IOP: {riop}
            </li>
          )}

          {colorvision && (
            <li>
              <i className="fas fa-angle-right" />
              Color Vision: {colorvision}
            </li>
          )}

          {lvisualfields && (
            <li>
              <i className="fas fa-angle-left" />
              Left Eye Visual Fields: {lvisualfields}
            </li>
          )}
          {rvisualfields && (
            <li>
              <i className="fas fa-angle-right" />
              Right Eye Visual Fields: {rvisualfields}
            </li>
          )}

          {ltreatment && (
            <li>
              <i className="fas fa-briefcase-medical" /> Left Eye Treatment:{" "}
              {ltreatment}
            </li>
          )}

          {rtreatment && (
            <li>
              <i className="fas fa-briefcase-medical" /> Right Eye Treatment:{" "}
              {rtreatment}
            </li>
          )}

          {followup && (
            <li>
              <i className="fas fa-angle-right" />
              Followup: {followup}
            </li>
          )}
        </ul>
        <p>
          <button
            className="btn btn-light btn-sm"
            onClick={() => setCurrent(contact)}
          >
            Edit
          </button>
          <button className="btn btn-danger btn-sm" onClick={onDelete}>
            Delete
          </button>
        </p>
      </div>
    </div>
  );
};

export default ContactItem;
