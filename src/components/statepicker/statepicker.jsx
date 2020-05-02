import React, { Component } from "react";
class Statepicker extends Component {
  state = {
    statename: {
      an: "ANDAMAN AND NICOBAR ISLANDS",
      ap: "ANDHRA PRADESH",
      ar: "ARUNACHAL PRADESH",
      as: "ASSAM",
      br: "BIHAR",
      ch: "CHANDIGARH",
      ct: "CHHATTISGARH",
      dd: "DAMAN AND DIU",
      dl: "DELHI",
      dn: "DADRA AND NAGAR HAVELI",
      ga: "GOA",
      gj: "GUJARAT",
      hp: "HIMACHAL PRADESH",
      hr: "HARYANA",
      jh: "JHARKAND",
      jk: "JAMMU AND KASHMIR",
      ka: "KARNATAKA",
      kl: "KERALA",
      la: "LADAKH",
      ld: "LAKSHADWEEP",
      mh: "MAHARASHTRA",
      ml: "MEGHALAYA",
      mn: "MANIPUR",
      mp: "MADHYA PRADESH",
      mz: "MIZORAM",
      nl: "NAGALAND",
      or: "ODISHA",
      pb: "PUJAB",
      py: "PUDUCHERRY",
      rj: "RAJASTHAN",
      sk: "SIKKIM",
      tg: "TELANGANA",
      tn: "TAMIL NADU",
      tr: "TRIPURA",
      tt: "All States",
      up: "UTTAR PRADESH",
      ut: "UTTARAKHAND",
      wb: "WEST BENGAL",
    },
  };

  createoptions = () => {
    let a = [];
    for (let key in this.state.statename) {
      a = [...a, key];
    }
    return a.map((s) => {
      return (
        <option key={s} value={s}>
          {this.state.statename[s]}
        </option>
      );
    });
  };

  render() {
    return (
      <div className="col">
        <div className="select">
          {/* <label htmlFor="stateselect">Select State </label> */}
          <select
            name="states"
            id="stateselect"
            defaultValue="tt"
            onChange={() =>
              this.props.onstateselect(
                document.getElementById("stateselect").value
              )
            }
          >
            {this.createoptions()}
          </select>
        </div>
      </div>
    );
  }
}

export default Statepicker;
