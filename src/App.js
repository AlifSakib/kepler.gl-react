// import React, { Component } from "react";
// import { connect } from "react-redux";
// import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
// import KeplerGl from "kepler.gl";
// import logo from "./logo.svg";
// import "./App.css";
// // Kepler.gl actions
// import { addDataToMap } from "kepler.gl/actions";
// // Kepler.gl Data processing APIs
// import Processors from "kepler.gl/processors";

// // Kepler.gl Schema APIs
// import KeplerGlSchema from "kepler.gl/schemas";
// import mapConfigJson from "./geodata/config-all.json";

// //const parkData = React.lazy(()=>import('./geodata/Bus_Routes.js'))
// import busRouteData from "./geodata/Bus_Routes.js";
// import ParkMapData from "./geodata/Parks.js";
// import busStopData from "./geodata/Bus_Stops.js";
// import Jahid_Routes from "./geodata/Jahid_Routes.js";
// const MAPBOX_TOKEN =
//   "pk.eyJ1IjoibG91aXN5b29uZyIsImEiOiJjbHJ1MTdzNGwwNXU4MmlvM2x4d2gzd2dnIn0.Kuz52xD-JDk8XzFlmYPLfw";

// class App extends Component {
//   componentDidMount() {
//     // Use processCsvData helper to convert csv file into kepler.gl structure {fields, rows}
//     const processedBusRouteData = Processors.processGeojson(busRouteData);
//     const processedParkMapData = Processors.processGeojson(ParkMapData);
//     const processedBusStopData = Processors.processGeojson(busStopData);
//     const processedJahidData = Processors.processGeojson(Jahid_Routes);
//     // Create dataset structure
//     const dataset1 = {
//       data: processedBusRouteData,
//       info: {
//         label: "Bus Routes",
//         // this is used to match the dataId defined in nyc-config.json. For more details see API documentation.
//         // It is paramount that this id matches your configuration otherwise the configuration file will be ignored.
//         id: "bk4x78l5m",
//       },
//     };

//     const dataset2 = {
//       data: processedParkMapData,
//       info: {
//         label: "Parks",
//         // this is used to match the dataId defined in nyc-config.json. For more details see API documentation.
//         // It is paramount that this id matches your configuration otherwise the configuration file will be ignored.
//         id: "mty4ajbu",
//       },
//     };

//     const dataset3 = {
//       data: processedBusStopData,
//       info: {
//         label: "Bus Stops",
//         // this is used to match the dataId defined in nyc-config.json. For more details see API documentation.
//         // It is paramount that this id matches your configuration otherwise the configuration file will be ignored.
//         id: "dgunthvkn",
//       },
//     };

//     const dataset4 = {
//       data: processedJahidData,
//       info: {
//         label: "Jahid Route",
//       },
//       id: "flgsdfhgg",
//     };

//     // addDataToMap action to inject dataset into kepler.gl instance
//     //hide side bar options: {readOnly: true}
//     this.props.dispatch(
//       addDataToMap({
//         // datasets: [dataset1, dataset2, dataset3],
//         datasets: [dataset4],
//         config: mapConfigJson,
//       })
//     );
//   }

//   render() {
//     return (
//       <div
//         style={{
//           position: "absolute",
//           width: "100%",
//           height: "100%",
//           minHeight: "70vh",
//         }}
//       >
//         <AutoSizer>
//           {({ height, width }) => (
//             <KeplerGl
//               mapboxApiAccessToken={MAPBOX_TOKEN}
//               id="map"
//               width={width}
//               height={height}
//             />
//           )}
//         </AutoSizer>
//       </div>
//     );
//   }
// }

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// const mapStateToProps = (state) => state;
// const dispatchToProps = (dispatch) => ({ dispatch });

// export default connect(mapStateToProps, dispatchToProps)(App);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import KeplerGl from "kepler.gl";
import logo from "./logo.svg";
import "./App.css";
// Kepler.gl actions
import { addDataToMap } from "kepler.gl/actions";
// Kepler.gl Data processing APIs
import Processors from "kepler.gl/processors";

// Kepler.gl Schema APIs
import KeplerGlSchema from "kepler.gl/schemas";
import mapConfigJson from "./geodata/config-all.json";

//const parkData = React.lazy(()=>import('./geodata/Bus_Routes.js'))
import busRouteData from "./geodata/Bus_Routes.js";
import ParkMapData from "./geodata/Parks.js";
import busStopData from "./geodata/Bus_Stops.js";
import Jahid_Routes from "./geodata/Jahid_Routes.js";
// const MAPBOX_TOKEN =
//   "pk.eyJ1IjoibG91aXN5b29uZyIsImEiOiJjbHJ1MTdzNGwwNXU4MmlvM2x4d2gzd2dnIn0.Kuz52xD-JDk8XzFlmYPLfw";

const MAPBOX_TOKEN = process.env.REACT_APP_MAP_BOX_TOKEN;

function App({ dispatch }) {
  useEffect(() => {
    // Use processCsvData helper to convert csv file into kepler.gl structure {fields, rows}
    const processedBusRouteData = Processors.processGeojson(busRouteData);
    const processedParkMapData = Processors.processGeojson(ParkMapData);
    const processedBusStopData = Processors.processGeojson(busStopData);
    const processedJahidData = Processors.processGeojson(Jahid_Routes);
    // Create dataset structure
    const dataset1 = {
      data: processedBusRouteData,
      info: {
        label: "Bus Routes",
        // this is used to match the dataId defined in nyc-config.json. For more details see API documentation.
        // It is paramount that this id matches your configuration otherwise the configuration file will be ignored.
        id: "bk4x78l5m",
      },
    };

    const dataset2 = {
      data: processedParkMapData,
      info: {
        label: "Parks",
        // this is used to match the dataId defined in nyc-config.json. For more details see API documentation.
        // It is paramount that this id matches your configuration otherwise the configuration file will be ignored.
        id: "mty4ajbu",
      },
    };

    const dataset3 = {
      data: processedBusStopData,
      info: {
        label: "Bus Stops",
        // this is used to match the dataId defined in nyc-config.json. For more details see API documentation.
        // It is paramount that this id matches your configuration otherwise the configuration file will be ignored.
        id: "dgunthvkn",
      },
    };

    const dataset4 = {
      data: processedJahidData,
      info: {
        label: "Jahid Route",
      },
      id: "flgsdfhgg",
    };

    // addDataToMap action to inject dataset into kepler.gl instance
    //hide side bar options: {readOnly: true}
    dispatch(
      addDataToMap({
        // datasets: [dataset1, dataset2, dataset3],
        datasets: [dataset4],
        config: mapConfigJson,
      })
    );
  }, [dispatch]);

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        minHeight: "70vh",
      }}
    >
      <AutoSizer>
        {({ height, width }) => (
          <KeplerGl
            mapboxApiAccessToken={MAPBOX_TOKEN}
            id="map"
            width={width}
            height={height}
          />
        )}
      </AutoSizer>
    </div>
  );
}

const mapStateToProps = (state) => state;
const dispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, dispatchToProps)(App);
