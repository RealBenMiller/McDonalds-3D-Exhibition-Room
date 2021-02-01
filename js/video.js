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

scene.hotspotContainer().createHotspot(
  document.getElementById("videoContainer"),
  {
    yaw: 0,
    pitch: 0.1,
  },
  {
    perspective: {
      radius: 1640,
      extraTransforms: "rotateX(5deg)",
    },
  }
);

var VideoHTML =
  '<iframe id="youtube" width="600" height="400" src="https://www.youtube.com/embed/XvRrHUvkbJc" frameborder="0" allowfullscreen></iframe>';

var VideoHolder = (document.getElementById(
  "videoContainer"
).innerHTML = VideoHTML);
