var APP_DATA = {
  "scenes": [
    {
      "id": "0-ruang-tv--kitchen",
      "name": "Ruang Tv & Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.5680533044772105,
        "pitch": 0.03945616906035099,
        "fov": 1.4649980646334675
      },
      "linkHotspots": [
        {
          "yaw": 2.676221272774285,
          "pitch": 0.07415442996588517,
          "rotation": 0,
          "target": "1-bedroom"
        },
        {
          "yaw": -3.0575272968650147,
          "pitch": 0.09830761930899001,
          "rotation": 0,
          "target": "2-wc"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.6343801507832953,
          "pitch": -0.05577719134399928,
          "title": "Balcony",
          "text": "Balcony"
        }
      ]
    },
    {
      "id": "1-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0781976088775167,
          "pitch": 0.15096291664466932,
          "rotation": 0,
          "target": "0-ruang-tv--kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-wc",
      "name": "WC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7938168473483955,
          "pitch": -0.1515279190298191,
          "rotation": 0,
          "target": "0-ruang-tv--kitchen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Vita's Apartment",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
