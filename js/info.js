/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";

scene.hotspotContainer().createHotspot(document.querySelector("#info"), {
  yaw: 0.7227102907804497,
  pitch: -0.06692682398677086,
});

scene.hotspotContainer().createHotspot(document.querySelector("#info2"), {
  yaw: 1.3274772615518735,
  pitch: -0.09375995713757135,
});

scene.hotspotContainer().createHotspot(document.querySelector("#info3"), {
  yaw: 2.148535838050851,
  pitch: -0.0883654887078631,
});

scene.hotspotContainer().createHotspot(document.querySelector("#info4"), {
  yaw: -2.1409517927426105,
  pitch: -0.11335045794850629,
});

scene.hotspotContainer().createHotspot(document.querySelector("#info5"), {
  yaw: -1.3806520833866394,
  pitch: -0.1250543884233064,
});

scene.hotspotContainer().createHotspot(document.querySelector("#info6"), {
  yaw: -0.7455772111502839,
  pitch: -0.09910901785368864,
});

scene.hotspotContainer().createHotspot(document.querySelector("#infoLeaflet"), {
  yaw: 2.7974038372694032,
  pitch: 0.20617291567136675,
});

document
  .querySelector("#info .icon_wrapper")
  .addEventListener("click", function () {
    let modal = document.getElementById("welcomeModal");
    modal.style.display = "block";
  });

function hideModal() {
  let modal = document.getElementById("welcomeModal");
  modal.style.display = "none";
}

function hideloadingModal() {
  let modal = document.getElementById("loadingModal");
  modal.style.display = "none";
}

scene
  .hotspotContainer()
  .createHotspot(document.getElementById("videoContainer"), {
    yaw: 0.00752894003238147,
    pitch: 0.026299914993902718,
  });

var VideoHTML =
  '<iframe id="youtube" width="1280" height="480" src="https://www.youtube.com/embed/XvRrHUvkbJc" frameborder="0" allowfullscreen></iframe>';

document.getElementById("video").innerHTML(VideoHTML);
