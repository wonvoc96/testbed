var APP_DATA = {
  "scenes": [
    {
      "id": "0-testbed",
      "name": "TESTBED",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5653987281424273,
          "pitch": -0.0026105623035235226,
          "rotation": 0,
          "target": "0-testbed"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7935556882622912,
          "pitch": -0.043600329411017213,
          "title": "모돈자동급이기",
          "tabs": [
            {
              "name": "회사A",
              "content": {
                "text": "회사A 제품 설명",
                "image": "path/to/companyA_image.jpg",
                "link": "https://companyA.com"
              }
            },
            {
              "name": "회사B",
              "content": {
                "text": "회사B 제품 설명",
                "image": "path/to/companyB_image.jpg",
                "link": "https://companyB.com"
              }
            },
            {
              "name": "회사C",
              "content": {
                "text": "회사C 제품 설명",
                "image": "path/to/companyC_image.jpg",
                "link": "https://companyC.com"
              }
            }
          ]
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
