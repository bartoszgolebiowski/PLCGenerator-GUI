import { HomeFormReponse, HomeFormTreeResponse } from "types";

export const homeFormSubmitTree: HomeFormTreeResponse = {
  "Children": [
    {
      "Parameters": [
        {
          "Name": "Interlocks",
          "Value": [],
          "AvailableValues": [
            {
              "Name": "Index",
              "Type": "UInt16",
              "MultiSelect": false,
              "Value": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
            },
            {
              "Name": "Robot1",
              "Type": "String",
              "MultiSelect": false,
              "Value": ["111010R01", "111020R01", "111025R01", "111030R01", "111030R02", "111040R01", "111045R01", "121060R01"]
            },
            {
              "Name": "Robot2",
              "Type": "String",
              "MultiSelect": false,
              "Value": ["111010R01", "111020R01", "111025R01", "111030R01", "111030R02", "111040R01", "111045R01", "121060R01"]
            }
          ]
        }
      ],
      "Children": [
        {
          "Parameters": [],
          "Children": [
            {
              "Parameters": [],
              "Children": [],
              "Name": "11HP"
            },
            {
              "Parameters": [],
              "Children": [
                {
                  "Parameters": [
                    {
                      "Name": "Tools",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "AddressPosition",
                          "Type": "UInt32",
                          "MultiSelect": false,
                          "Value": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                        },
                        {
                          "Name": "ToolName",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": ["CapChanger", "Gluer", "Gripper", "Welder", "WelderBox"]
                        }
                      ]
                    },
                    {
                      "Name": "FmList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        }
                      ]
                    },
                    {
                      "Name": "WerkzeugFreigabeList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Address",
                          "Type": "UInt32",
                          "MultiSelect": false,
                          "Value": [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        },
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "Stations",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": ["111011BH1", "111012BH1", "111013BH1", "111015BH1", "111015BH2", "111020V01", "111020SB1", "111020SB2", "111030V01", "121050V01", "121050V02", "121050DT1", "121065V01", "121065DT1", "131070SB1"]
                        },
                        {
                          "Name": "Type",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": ["Profilfrei", "InPositionPOT", "InPosition"]
                        }
                      ]
                    },
                    {
                      "Name": "StellungFreigabeList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Address",
                          "Type": "UInt32",
                          "MultiSelect": false,
                          "Value": [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        },
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "Stations",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": ["111011BH1", "111012BH1", "111013BH1", "111015BH1", "111015BH2", "111020V01", "111020SB1", "111020SB2", "111030V01", "121050V01", "121050V02", "121050DT1", "121065V01", "121065DT1", "131070SB1"]
                        },
                        {
                          "Name": "Type",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": ["Freigabe", "Frei", "Belegt"]
                        }
                      ]
                    }
                  ],
                  "Children": [],
                  "Name": "111010R01"
                }
              ],
              "Name": "111010"
            },
            {
              "Parameters": [],
              "Children": [
                {
                  "Parameters": [
                    {
                      "Name": "FmList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        }
                      ]
                    }
                  ],
                  "Children": [
                    {
                      "Parameters": [],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111011BH1VI1KKP01"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111011BH1VI1KKP11"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111011BH1VI1KKP12"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111011BH1VI1KKP13"
                        }
                      ],
                      "Name": "111011BH1VI1"
                    },
                    {
                      "Parameters": [],
                      "Children": [],
                      "Name": "111011BH1SFN1"
                    }
                  ],
                  "Name": "111011BH1"
                }
              ],
              "Name": "111011"
            },
            {
              "Parameters": [],
              "Children": [
                {
                  "Parameters": [
                    {
                      "Name": "FmList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        }
                      ]
                    }
                  ],
                  "Children": [
                    {
                      "Parameters": [],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111012BH1VI1KKP01"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111012BH1VI1KKP11"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111012BH1VI1KKP12"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111012BH1VI1KKP13"
                        }
                      ],
                      "Name": "111012BH1VI1"
                    },
                    {
                      "Parameters": [],
                      "Children": [],
                      "Name": "111012BH1SFN1"
                    }
                  ],
                  "Name": "111012BH1"
                }
              ],
              "Name": "111012"
            },
            {
              "Parameters": [],
              "Children": [
                {
                  "Parameters": [
                    {
                      "Name": "FmList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        }
                      ]
                    }
                  ],
                  "Children": [
                    {
                      "Parameters": [],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111013BH1VI1KKP01"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111013BH1VI1KKP11"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111013BH1VI1KKP12"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111013BH1VI1KKP13"
                        }
                      ],
                      "Name": "111013BH1VI1"
                    },
                    {
                      "Parameters": [],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111013BH1VI2KKP01"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111013BH1VI2KKP13"
                        }
                      ],
                      "Name": "111013BH1VI2"
                    },
                    {
                      "Parameters": [],
                      "Children": [],
                      "Name": "111013BH1SFN1"
                    }
                  ],
                  "Name": "111013BH1"
                }
              ],
              "Name": "111013"
            },
            {
              "Parameters": [],
              "Children": [
                {
                  "Parameters": [
                    {
                      "Name": "FmList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        }
                      ]
                    }
                  ],
                  "Children": [
                    {
                      "Parameters": [],
                      "Children": [],
                      "Name": "111015BH1VI1"
                    }
                  ],
                  "Name": "111015BH1"
                },
                {
                  "Parameters": [
                    {
                      "Name": "FmList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        }
                      ]
                    }
                  ],
                  "Children": [
                    {
                      "Parameters": [],
                      "Children": [],
                      "Name": "111015BH2VI1"
                    }
                  ],
                  "Name": "111015BH2"
                }
              ],
              "Name": "111015"
            },
            {
              "Parameters": [],
              "Children": [
                {
                  "Parameters": [
                    {
                      "Name": "Tools",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "AddressPosition",
                          "Type": "UInt32",
                          "MultiSelect": false,
                          "Value": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                        },
                        {
                          "Name": "ToolName",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": ["CapChanger", "Gluer", "Gripper", "Welder", "WelderBox"]
                        }
                      ]
                    },
                    {
                      "Name": "FmList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        }
                      ]
                    },
                    {
                      "Name": "WerkzeugFreigabeList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Address",
                          "Type": "UInt32",
                          "MultiSelect": false,
                          "Value": [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        },
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "Stations",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": ["111011BH1", "111012BH1", "111013BH1", "111015BH1", "111015BH2", "111020V01", "111020SB1", "111020SB2", "111030V01", "121050V01", "121050V02", "121050DT1", "121065V01", "121065DT1", "131070SB1"]
                        },
                        {
                          "Name": "Type",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": ["Profilfrei", "InPositionPOT", "InPosition"]
                        }
                      ]
                    },
                    {
                      "Name": "StellungFreigabeList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Address",
                          "Type": "UInt32",
                          "MultiSelect": false,
                          "Value": [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        },
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "Stations",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": ["111011BH1", "111012BH1", "111013BH1", "111015BH1", "111015BH2", "111020V01", "111020SB1", "111020SB2", "111030V01", "121050V01", "121050V02", "121050DT1", "121065V01", "121065DT1", "131070SB1"]
                        },
                        {
                          "Name": "Type",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": ["Freigabe", "Frei", "Belegt"]
                        }
                      ]
                    }
                  ],
                  "Children": [],
                  "Name": "111020R01"
                },
                {
                  "Parameters": [
                    {
                      "Name": "FmList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        }
                      ]
                    }
                  ],
                  "Children": [
                    {
                      "Parameters": [],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01VI1KKP01"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01VI1KKP11"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01VI1KKP12"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01VI1KKP13"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01VI1KKP14"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01VI1KKP15"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01VI1KKP16"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01VI1KKP17"
                        }
                      ],
                      "Name": "111020V01VI1"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Valve",
                          "Value": { "Index": 11 },
                          "AvailableValues": [
                            {
                              "Name": "Index",
                              "Type": "UInt32",
                              "MultiSelect": false,
                              "Value": [1, 11, 12, 13, 14, 15, 16, 17]
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGE11a"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGE11b"
                        }
                      ],
                      "Name": "111020V01BGE11"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Valve",
                          "Value": { "Index": 12 },
                          "AvailableValues": [
                            {
                              "Name": "Index",
                              "Type": "UInt32",
                              "MultiSelect": false,
                              "Value": [1, 11, 12, 13, 14, 15, 16, 17]
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGE12a"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGE12b"
                        }
                      ],
                      "Name": "111020V01BGE12"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Valve",
                          "Value": { "Index": 13 },
                          "AvailableValues": [
                            {
                              "Name": "Index",
                              "Type": "UInt32",
                              "MultiSelect": false,
                              "Value": [1, 11, 12, 13, 14, 15, 16, 17]
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGE13a"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGE13b"
                        }
                      ],
                      "Name": "111020V01BGE13"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Valve",
                          "Value": { "Index": 14 },
                          "AvailableValues": [
                            {
                              "Name": "Index",
                              "Type": "UInt32",
                              "MultiSelect": false,
                              "Value": [1, 11, 12, 13, 14, 15, 16, 17]
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGE14a"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGE14b"
                        }
                      ],
                      "Name": "111020V01BGE14"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Valve",
                          "Value": { "Index": 15 },
                          "AvailableValues": [
                            {
                              "Name": "Index",
                              "Type": "UInt32",
                              "MultiSelect": false,
                              "Value": [1, 11, 12, 13, 14, 15, 16, 17]
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGE15a"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGE15b"
                        }
                      ],
                      "Name": "111020V01BGE15"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Valve",
                          "Value": { "Index": 16 },
                          "AvailableValues": [
                            {
                              "Name": "Index",
                              "Type": "UInt32",
                              "MultiSelect": false,
                              "Value": [1, 11, 12, 13, 14, 15, 16, 17]
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGE16a"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGE16b"
                        }
                      ],
                      "Name": "111020V01BGE16"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Valve",
                          "Value": { "Index": 17 },
                          "AvailableValues": [
                            {
                              "Name": "Index",
                              "Type": "UInt32",
                              "MultiSelect": false,
                              "Value": [1, 11, 12, 13, 14, 15, 16, 17]
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGE17a"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGE17b"
                        }
                      ],
                      "Name": "111020V01BGE17"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGT11a"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGT11b"
                        }
                      ],
                      "Name": "111020V01BGT11"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGT12a"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGT12b"
                        }
                      ],
                      "Name": "111020V01BGT12"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGT13a"
                        }
                      ],
                      "Name": "111020V01BGT13"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGT14a"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGT14b"
                        }
                      ],
                      "Name": "111020V01BGT14"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGT15a"
                        }
                      ],
                      "Name": "111020V01BGT15"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGT16a"
                        }
                      ],
                      "Name": "111020V01BGT16"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGT17a"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGT17b"
                        }
                      ],
                      "Name": "111020V01BGT17"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGT18a"
                        }
                      ],
                      "Name": "111020V01BGT18"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGT19a"
                        }
                      ],
                      "Name": "111020V01BGT19"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGT20a"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020V01BGT20b"
                        }
                      ],
                      "Name": "111020V01BGT20"
                    }
                  ],
                  "Name": "111020V01"
                },
                {
                  "Parameters": [
                    {
                      "Name": "FmList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        }
                      ]
                    }
                  ],
                  "Children": [
                    {
                      "Parameters": [],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020SB1VI1KKP01"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020SB1VI1KKP11"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020SB1VI1KKP12"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020SB1VI1KKP13"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020SB1VI1KKP14"
                        }
                      ],
                      "Name": "111020SB1VI1"
                    },
                    {
                      "Parameters": [],
                      "Children": [],
                      "Name": "111020SB1SFN1"
                    }
                  ],
                  "Name": "111020SB1"
                },
                {
                  "Parameters": [
                    {
                      "Name": "FmList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        }
                      ]
                    }
                  ],
                  "Children": [
                    {
                      "Parameters": [],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020SB2VI1KKP01"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020SB2VI1KKP11"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020SB2VI1KKP12"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020SB2VI1KKP13"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111020SB2VI1KKP14"
                        }
                      ],
                      "Name": "111020SB2VI1"
                    },
                    {
                      "Parameters": [],
                      "Children": [],
                      "Name": "111020SB2SFN1"
                    },
                    {
                      "Parameters": [],
                      "Children": [],
                      "Name": "111020SB2SFN2"
                    }
                  ],
                  "Name": "111020SB2"
                }
              ],
              "Name": "111020"
            },
            {
              "Parameters": [],
              "Children": [
                {
                  "Parameters": [
                    {
                      "Name": "Tools",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "AddressPosition",
                          "Type": "UInt32",
                          "MultiSelect": false,
                          "Value": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                        },
                        {
                          "Name": "ToolName",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": ["CapChanger", "Gluer", "Gripper", "Welder", "WelderBox"]
                        }
                      ]
                    },
                    {
                      "Name": "FmList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        }
                      ]
                    },
                    {
                      "Name": "WerkzeugFreigabeList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Address",
                          "Type": "UInt32",
                          "MultiSelect": false,
                          "Value": [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        },
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "Stations",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": ["111011BH1", "111012BH1", "111013BH1", "111015BH1", "111015BH2", "111020V01", "111020SB1", "111020SB2", "111030V01", "121050V01", "121050V02", "121050DT1", "121065V01", "121065DT1", "131070SB1"]
                        },
                        {
                          "Name": "Type",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": ["Profilfrei", "InPositionPOT", "InPosition"]
                        }
                      ]
                    },
                    {
                      "Name": "StellungFreigabeList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Address",
                          "Type": "UInt32",
                          "MultiSelect": false,
                          "Value": [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        },
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "Stations",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": ["111011BH1", "111012BH1", "111013BH1", "111015BH1", "111015BH2", "111020V01", "111020SB1", "111020SB2", "111030V01", "121050V01", "121050V02", "121050DT1", "121065V01", "121065DT1", "131070SB1"]
                        },
                        {
                          "Name": "Type",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": ["Freigabe", "Frei", "Belegt"]
                        }
                      ]
                    }
                  ],
                  "Children": [],
                  "Name": "111025R01"
                }
              ],
              "Name": "111025"
            },
            {
              "Parameters": [],
              "Children": [
                {
                  "Parameters": [
                    {
                      "Name": "Tools",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "AddressPosition",
                          "Type": "UInt32",
                          "MultiSelect": false,
                          "Value": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                        },
                        {
                          "Name": "ToolName",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": ["CapChanger", "Gluer", "Gripper", "Welder", "WelderBox"]
                        }
                      ]
                    },
                    {
                      "Name": "FmList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        }
                      ]
                    },
                    {
                      "Name": "WerkzeugFreigabeList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Address",
                          "Type": "UInt32",
                          "MultiSelect": false,
                          "Value": [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        },
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "Stations",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": ["111011BH1", "111012BH1", "111013BH1", "111015BH1", "111015BH2", "111020V01", "111020SB1", "111020SB2", "111030V01", "121050V01", "121050V02", "121050DT1", "121065V01", "121065DT1", "131070SB1"]
                        },
                        {
                          "Name": "Type",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": ["Profilfrei", "InPositionPOT", "InPosition"]
                        }
                      ]
                    },
                    {
                      "Name": "StellungFreigabeList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Address",
                          "Type": "UInt32",
                          "MultiSelect": false,
                          "Value": [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        },
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "Stations",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": ["111011BH1", "111012BH1", "111013BH1", "111015BH1", "111015BH2", "111020V01", "111020SB1", "111020SB2", "111030V01", "121050V01", "121050V02", "121050DT1", "121065V01", "121065DT1", "131070SB1"]
                        },
                        {
                          "Name": "Type",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": ["Freigabe", "Frei", "Belegt"]
                        }
                      ]
                    }
                  ],
                  "Children": [],
                  "Name": "111030R01"
                },
                {
                  "Parameters": [
                    {
                      "Name": "Tools",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "AddressPosition",
                          "Type": "UInt32",
                          "MultiSelect": false,
                          "Value": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                        },
                        {
                          "Name": "ToolName",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": ["CapChanger", "Gluer", "Gripper", "Welder", "WelderBox"]
                        }
                      ]
                    },
                    {
                      "Name": "FmList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        }
                      ]
                    },
                    {
                      "Name": "WerkzeugFreigabeList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Address",
                          "Type": "UInt32",
                          "MultiSelect": false,
                          "Value": [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        },
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "Stations",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": ["111011BH1", "111012BH1", "111013BH1", "111015BH1", "111015BH2", "111020V01", "111020SB1", "111020SB2", "111030V01", "121050V01", "121050V02", "121050DT1", "121065V01", "121065DT1", "131070SB1"]
                        },
                        {
                          "Name": "Type",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": ["Profilfrei", "InPositionPOT", "InPosition"]
                        }
                      ]
                    },
                    {
                      "Name": "StellungFreigabeList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Address",
                          "Type": "UInt32",
                          "MultiSelect": false,
                          "Value": [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        },
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "Stations",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": ["111011BH1", "111012BH1", "111013BH1", "111015BH1", "111015BH2", "111020V01", "111020SB1", "111020SB2", "111030V01", "121050V01", "121050V02", "121050DT1", "121065V01", "121065DT1", "131070SB1"]
                        },
                        {
                          "Name": "Type",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": ["Freigabe", "Frei", "Belegt"]
                        }
                      ]
                    }
                  ],
                  "Children": [],
                  "Name": "111030R02"
                },
                {
                  "Parameters": [
                    {
                      "Name": "FmList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        }
                      ]
                    }
                  ],
                  "Children": [
                    {
                      "Parameters": [],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01VI1KKP01"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01VI1KKP11"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01VI1KKP12"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01VI1KKP13"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01VI1KKP14"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01VI1KKP15"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01VI1KKP16"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01VI1KKP17"
                        }
                      ],
                      "Name": "111030V01VI1"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Valve",
                          "Value": { "Index": 11 },
                          "AvailableValues": [
                            {
                              "Name": "Index",
                              "Type": "UInt32",
                              "MultiSelect": false,
                              "Value": [1, 11, 12, 13, 14, 15, 16, 17]
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGE11a"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGE11b"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGE11c"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGE11d"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGE11e"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGE11f"
                        }
                      ],
                      "Name": "111030V01BGE11"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Valve",
                          "Value": { "Index": 12 },
                          "AvailableValues": [
                            {
                              "Name": "Index",
                              "Type": "UInt32",
                              "MultiSelect": false,
                              "Value": [1, 11, 12, 13, 14, 15, 16, 17]
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGE12a"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGE12b"
                        }
                      ],
                      "Name": "111030V01BGE12"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Valve",
                          "Value": { "Index": 13 },
                          "AvailableValues": [
                            {
                              "Name": "Index",
                              "Type": "UInt32",
                              "MultiSelect": false,
                              "Value": [1, 11, 12, 13, 14, 15, 16, 17]
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGE13a"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGE13b"
                        }
                      ],
                      "Name": "111030V01BGE13"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Valve",
                          "Value": { "Index": 14 },
                          "AvailableValues": [
                            {
                              "Name": "Index",
                              "Type": "UInt32",
                              "MultiSelect": false,
                              "Value": [1, 11, 12, 13, 14, 15, 16, 17]
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGE14a"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGE14b"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGE14c"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGE14d"
                        }
                      ],
                      "Name": "111030V01BGE14"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Valve",
                          "Value": { "Index": 15 },
                          "AvailableValues": [
                            {
                              "Name": "Index",
                              "Type": "UInt32",
                              "MultiSelect": false,
                              "Value": [1, 11, 12, 13, 14, 15, 16, 17]
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGE15a"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGE15b"
                        }
                      ],
                      "Name": "111030V01BGE15"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Valve",
                          "Value": { "Index": 16 },
                          "AvailableValues": [
                            {
                              "Name": "Index",
                              "Type": "UInt32",
                              "MultiSelect": false,
                              "Value": [1, 11, 12, 13, 14, 15, 16, 17]
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGE16a"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGE16b"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGE16c"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGE16d"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGE16e"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGE16f"
                        }
                      ],
                      "Name": "111030V01BGE16"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Valve",
                          "Value": { "Index": 17 },
                          "AvailableValues": [
                            {
                              "Name": "Index",
                              "Type": "UInt32",
                              "MultiSelect": false,
                              "Value": [1, 11, 12, 13, 14, 15, 16, 17]
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGE17a"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGE17b"
                        }
                      ],
                      "Name": "111030V01BGE17"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGT11a"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGT11b"
                        }
                      ],
                      "Name": "111030V01BGT11"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGT12a"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGT12b"
                        }
                      ],
                      "Name": "111030V01BGT12"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGT13a"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGT13b"
                        }
                      ],
                      "Name": "111030V01BGT13"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGT14a"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGT14b"
                        }
                      ],
                      "Name": "111030V01BGT14"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGT15a"
                        }
                      ],
                      "Name": "111030V01BGT15"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGT16a"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGT16b"
                        }
                      ],
                      "Name": "111030V01BGT16"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGT17a"
                        }
                      ],
                      "Name": "111030V01BGT17"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGT18a"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "111030V01BGT18b"
                        }
                      ],
                      "Name": "111030V01BGT18"
                    }
                  ],
                  "Name": "111030V01"
                }
              ],
              "Name": "111030"
            },
            {
              "Parameters": [],
              "Children": [
                {
                  "Parameters": [
                    {
                      "Name": "Tools",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "AddressPosition",
                          "Type": "UInt32",
                          "MultiSelect": false,
                          "Value": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                        },
                        {
                          "Name": "ToolName",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": ["CapChanger", "Gluer", "Gripper", "Welder", "WelderBox"]
                        }
                      ]
                    },
                    {
                      "Name": "FmList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        }
                      ]
                    },
                    {
                      "Name": "WerkzeugFreigabeList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Address",
                          "Type": "UInt32",
                          "MultiSelect": false,
                          "Value": [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        },
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "Stations",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": ["111011BH1", "111012BH1", "111013BH1", "111015BH1", "111015BH2", "111020V01", "111020SB1", "111020SB2", "111030V01", "121050V01", "121050V02", "121050DT1", "121065V01", "121065DT1", "131070SB1"]
                        },
                        {
                          "Name": "Type",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": ["Profilfrei", "InPositionPOT", "InPosition"]
                        }
                      ]
                    },
                    {
                      "Name": "StellungFreigabeList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Address",
                          "Type": "UInt32",
                          "MultiSelect": false,
                          "Value": [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        },
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "Stations",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": ["111011BH1", "111012BH1", "111013BH1", "111015BH1", "111015BH2", "111020V01", "111020SB1", "111020SB2", "111030V01", "121050V01", "121050V02", "121050DT1", "121065V01", "121065DT1", "131070SB1"]
                        },
                        {
                          "Name": "Type",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": ["Freigabe", "Frei", "Belegt"]
                        }
                      ]
                    }
                  ],
                  "Children": [],
                  "Name": "111040R01"
                }
              ],
              "Name": "111040"
            },
            {
              "Parameters": [],
              "Children": [
                {
                  "Parameters": [
                    {
                      "Name": "Tools",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "AddressPosition",
                          "Type": "UInt32",
                          "MultiSelect": false,
                          "Value": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                        },
                        {
                          "Name": "ToolName",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": ["CapChanger", "Gluer", "Gripper", "Welder", "WelderBox"]
                        }
                      ]
                    },
                    {
                      "Name": "FmList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        }
                      ]
                    },
                    {
                      "Name": "WerkzeugFreigabeList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Address",
                          "Type": "UInt32",
                          "MultiSelect": false,
                          "Value": [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        },
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "Stations",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": ["111011BH1", "111012BH1", "111013BH1", "111015BH1", "111015BH2", "111020V01", "111020SB1", "111020SB2", "111030V01", "121050V01", "121050V02", "121050DT1", "121065V01", "121065DT1", "131070SB1"]
                        },
                        {
                          "Name": "Type",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": ["Profilfrei", "InPositionPOT", "InPosition"]
                        }
                      ]
                    },
                    {
                      "Name": "StellungFreigabeList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Address",
                          "Type": "UInt32",
                          "MultiSelect": false,
                          "Value": [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        },
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "Stations",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": ["111011BH1", "111012BH1", "111013BH1", "111015BH1", "111015BH2", "111020V01", "111020SB1", "111020SB2", "111030V01", "121050V01", "121050V02", "121050DT1", "121065V01", "121065DT1", "131070SB1"]
                        },
                        {
                          "Name": "Type",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": ["Freigabe", "Frei", "Belegt"]
                        }
                      ]
                    }
                  ],
                  "Children": [],
                  "Name": "111045R01"
                }
              ],
              "Name": "111045"
            },
            {
              "Parameters": [],
              "Children": [],
              "Name": "11B12"
            },
            {
              "Parameters": [],
              "Children": [],
              "Name": "11IG1"
            },
            {
              "Parameters": [],
              "Children": [
                {
                  "Parameters": [],
                  "Children": [],
                  "Name": "11IG2SFN1"
                }
              ],
              "Name": "11IG2"
            },
            {
              "Parameters": [],
              "Children": [],
              "Name": "11IG3"
            },
            {
              "Parameters": [],
              "Children": [],
              "Name": "11IG4"
            },
            {
              "Parameters": [],
              "Children": [
                {
                  "Parameters": [],
                  "Children": [],
                  "Name": "11IG5SFN1"
                }
              ],
              "Name": "11IG5"
            },
            {
              "Parameters": [],
              "Children": [
                {
                  "Parameters": [],
                  "Children": [],
                  "Name": "11IG6SFN1"
                }
              ],
              "Name": "11IG6"
            },
            {
              "Parameters": [],
              "Children": [],
              "Name": "11IG7"
            }
          ],
          "Name": "11"
        },
        {
          "Parameters": [],
          "Children": [
            {
              "Parameters": [],
              "Children": [],
              "Name": "12HP"
            },
            {
              "Parameters": [],
              "Children": [],
              "Name": "12SFN1"
            },
            {
              "Parameters": [],
              "Children": [],
              "Name": "12SFN2"
            },
            {
              "Parameters": [],
              "Children": [
                {
                  "Parameters": [
                    {
                      "Name": "FmList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        }
                      ]
                    }
                  ],
                  "Children": [
                    {
                      "Parameters": [],
                      "Children": [],
                      "Name": "121050V01VI1"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121050V01BGT11a"
                        }
                      ],
                      "Name": "121050V01BGT11"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121050V01BGT12a"
                        }
                      ],
                      "Name": "121050V01BGT12"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121050V01BGT13a"
                        }
                      ],
                      "Name": "121050V01BGT13"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121050V01BGT14a"
                        }
                      ],
                      "Name": "121050V01BGT14"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121050V01BGT19a"
                        }
                      ],
                      "Name": "121050V01BGT19"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121050V01BGT21a"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121050V01BGT21b"
                        }
                      ],
                      "Name": "121050V01BGT21"
                    }
                  ],
                  "Name": "121050V01"
                },
                {
                  "Parameters": [
                    {
                      "Name": "FmList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        }
                      ]
                    }
                  ],
                  "Children": [
                    {
                      "Parameters": [],
                      "Children": [],
                      "Name": "121050V02VI1"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121050V02BGT15a"
                        }
                      ],
                      "Name": "121050V02BGT15"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121050V02BGT16a"
                        }
                      ],
                      "Name": "121050V02BGT16"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121050V02BGT17a"
                        }
                      ],
                      "Name": "121050V02BGT17"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121050V02BGT18a"
                        }
                      ],
                      "Name": "121050V02BGT18"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121050V02BGT20a"
                        }
                      ],
                      "Name": "121050V02BGT20"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121050V02BGT22a"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121050V02BGT22b"
                        }
                      ],
                      "Name": "121050V02BGT22"
                    }
                  ],
                  "Name": "121050V02"
                },
                {
                  "Parameters": [
                    {
                      "Name": "FmList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        }
                      ]
                    }
                  ],
                  "Children": [
                    {
                      "Parameters": [
                        {
                          "Name": "Positions",
                          "Value": [
                            {
                              "Index": 1,
                              "SensorName": "BGE01"
                            },
                            {
                              "Index": 2,
                              "SensorName": "BGE02"
                            }
                          ],
                          "AvailableValues": [
                            {
                              "Name": "Index",
                              "Type": "UInt16",
                              "MultiSelect": false,
                              "Value": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
                            },
                            {
                              "Name": "SensorName",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": ["BGE01", "BGE02"]
                            }
                          ]
                        },
                        {
                          "Name": "Controller",
                          "Value": { "Type": 0 },
                          "AvailableValues": [
                            {
                              "Name": "Type",
                              "Type": "Controller",
                              "MultiSelect": false,
                              "Value": ["DrehtFU_8S"]
                            }
                          ]
                        },
                        {
                          "Name": "Technology",
                          "Value": { "Type": 0 },
                          "AvailableValues": [
                            {
                              "Name": "Type",
                              "Type": "Technology",
                              "MultiSelect": false,
                              "Value": ["SEW_AMA_BIN"]
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121050DT1AE1BGE01"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121050DT1AE1BGE02"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121050DT1AE1BGS01"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121050DT1AE1BGS02"
                        }
                      ],
                      "Name": "121050DT1AE1"
                    }
                  ],
                  "Name": "121050DT1"
                }
              ],
              "Name": "121050"
            },
            {
              "Parameters": [],
              "Children": [
                {
                  "Parameters": [
                    {
                      "Name": "Tools",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "AddressPosition",
                          "Type": "UInt32",
                          "MultiSelect": false,
                          "Value": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                        },
                        {
                          "Name": "ToolName",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": ["CapChanger", "Gluer", "Gripper", "Welder", "WelderBox"]
                        }
                      ]
                    },
                    {
                      "Name": "FmList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        }
                      ]
                    },
                    {
                      "Name": "WerkzeugFreigabeList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Address",
                          "Type": "UInt32",
                          "MultiSelect": false,
                          "Value": [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        },
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "Stations",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": ["111011BH1", "111012BH1", "111013BH1", "111015BH1", "111015BH2", "111020V01", "111020SB1", "111020SB2", "111030V01", "121050V01", "121050V02", "121050DT1", "121065V01", "121065DT1", "131070SB1"]
                        },
                        {
                          "Name": "Type",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": ["Profilfrei", "InPositionPOT", "InPosition"]
                        }
                      ]
                    },
                    {
                      "Name": "StellungFreigabeList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Address",
                          "Type": "UInt32",
                          "MultiSelect": false,
                          "Value": [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        },
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "Stations",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": ["111011BH1", "111012BH1", "111013BH1", "111015BH1", "111015BH2", "111020V01", "111020SB1", "111020SB2", "111030V01", "121050V01", "121050V02", "121050DT1", "121065V01", "121065DT1", "131070SB1"]
                        },
                        {
                          "Name": "Type",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": ["Freigabe", "Frei", "Belegt"]
                        }
                      ]
                    }
                  ],
                  "Children": [],
                  "Name": "121060R01"
                }
              ],
              "Name": "121060"
            },
            {
              "Parameters": [],
              "Children": [],
              "Name": "121061"
            },
            {
              "Parameters": [],
              "Children": [],
              "Name": "121062"
            },
            {
              "Parameters": [],
              "Children": [
                {
                  "Parameters": [
                    {
                      "Name": "FmList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        }
                      ]
                    }
                  ],
                  "Children": [
                    {
                      "Parameters": [],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121065V01VI1KKP01"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121065V01VI1KKP11"
                        }
                      ],
                      "Name": "121065V01VI1"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Valve",
                          "Value": { "Index": 11 },
                          "AvailableValues": [
                            {
                              "Name": "Index",
                              "Type": "UInt32",
                              "MultiSelect": false,
                              "Value": [1, 11]
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121065V01BGE11a"
                        }
                      ],
                      "Name": "121065V01BGE11"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121065V01BGT11a"
                        }
                      ],
                      "Name": "121065V01BGT11"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121065V01BGT12a"
                        }
                      ],
                      "Name": "121065V01BGT12"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121065V01BGT13a"
                        }
                      ],
                      "Name": "121065V01BGT13"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121065V01BGT14a"
                        }
                      ],
                      "Name": "121065V01BGT14"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121065V01BGT15a"
                        }
                      ],
                      "Name": "121065V01BGT15"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121065V01BGT16a"
                        }
                      ],
                      "Name": "121065V01BGT16"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121065V01BGT17a"
                        }
                      ],
                      "Name": "121065V01BGT17"
                    },
                    {
                      "Parameters": [
                        {
                          "Name": "Parts",
                          "Value": [],
                          "AvailableValues": [
                            {
                              "Name": "Name",
                              "Type": "String",
                              "MultiSelect": false,
                              "Value": []
                            }
                          ]
                        }
                      ],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121065V01BGT18a"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "121065V01BGT18b"
                        }
                      ],
                      "Name": "121065V01BGT18"
                    }
                  ],
                  "Name": "121065V01"
                },
                {
                  "Parameters": [
                    {
                      "Name": "FmList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        }
                      ]
                    }
                  ],
                  "Children": [
                    {
                      "Parameters": [],
                      "Children": [],
                      "Name": "121065DT1SFN1"
                    }
                  ],
                  "Name": "121065DT1"
                }
              ],
              "Name": "121065"
            },
            {
              "Parameters": [],
              "Children": [],
              "Name": "12IG1"
            }
          ],
          "Name": "12"
        },
        {
          "Parameters": [],
          "Children": [
            {
              "Parameters": [],
              "Children": [],
              "Name": "13HP"
            },
            {
              "Parameters": [],
              "Children": [
                {
                  "Parameters": [
                    {
                      "Name": "FmList",
                      "Value": [],
                      "AvailableValues": [
                        {
                          "Name": "Name",
                          "Type": "String",
                          "MultiSelect": false,
                          "Value": null
                        },
                        {
                          "Name": "ConnectedActions",
                          "Type": "String[]",
                          "MultiSelect": true,
                          "Value": []
                        }
                      ]
                    }
                  ],
                  "Children": [
                    {
                      "Parameters": [],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "131070SB1VI1KKP01"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "131070SB1VI1KKP21"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "131070SB1VI1KKP22"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "131070SB1VI1KKP23"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "131070SB1VI1KKP24"
                        }
                      ],
                      "Name": "131070SB1VI1"
                    },
                    {
                      "Parameters": [],
                      "Children": [
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "131070SB1VI2KKP01"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "131070SB1VI2KKP11"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "131070SB1VI2KKP12"
                        },
                        {
                          "Parameters": [],
                          "Children": [],
                          "Name": "131070SB1VI2KKP13"
                        }
                      ],
                      "Name": "131070SB1VI2"
                    },
                    {
                      "Parameters": [],
                      "Children": [],
                      "Name": "131070SB1SFN1"
                    },
                    {
                      "Parameters": [],
                      "Children": [],
                      "Name": "131070SB1SFN2"
                    }
                  ],
                  "Name": "131070SB1"
                }
              ],
              "Name": "131070"
            }
          ],
          "Name": "13"
        },
        {
          "Parameters": [],
          "Children": [
            {
              "Parameters": [],
              "Children": [],
              "Name": "1IA1SFN1"
            }
          ],
          "Name": "1IA1"
        },
        {
          "Parameters": [],
          "Children": [],
          "Name": "1IA2"
        },
        {
          "Parameters": [],
          "Children": [],
          "Name": "1IA3"
        },
        {
          "Parameters": [],
          "Children": [],
          "Name": "1IA4"
        },
        {
          "Parameters": [],
          "Children": [],
          "Name": "1KV1"
        },
        {
          "Parameters": [],
          "Children": [],
          "Name": "1SV1"
        },
        {
          "Parameters": [],
          "Children": [],
          "Name": "1BS1"
        }
      ],
      "Name": "1"
    }
  ],
  "Name": "KGBHTS"
}

export const homeFormSubmit = [
  {
    operandIdentifier: 1,
    address: 6.0,
    name: "F_True",
    dataType: "BOOL",
    comment: "Inbetriebnahmebr�cke",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 85.4,
    name: "1IB1I01SFWE7",
    dataType: "BOOL",
    comment: "E7-�berbr�ckung Verriegelung Nebenbedienpult",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 62.1,
    name: "1IB1KFS1SFN1",
    dataType: "BOOL",
    comment: "Not-Halt Comfort Panel",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 512.0,
    name: "11HP1VI1KKP01EE",
    dataType: "BOOL",
    comment: "Einschaltventil ein",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 512.2,
    name: "11HP1VI1KKP01DE",
    dataType: "BOOL",
    comment: "Luft ein",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 512.3,
    name: "11HP1VI1KKP01DA",
    dataType: "BOOL",
    comment: "Luft aus",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 512.4,
    name: "11HP1VI1KKP01WE",
    dataType: "BOOL",
    comment: "K�hlwasser ein",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 512.5,
    name: "11HP1VI1KKP01WA",
    dataType: "BOOL",
    comment: "K�hlwasser aus",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 513.0,
    name: "11HP1VI1KKP01EBER",
    dataType: "BOOL",
    comment: "Ventil bereit",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 513.1,
    name: "11HP1VI1KKP01DBER",
    dataType: "BOOL",
    comment: "Ventil bereit",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 513.2,
    name: "11HP1VI1KKP01WBER",
    dataType: "BOOL",
    comment: "Ventil bereit",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 516.0,
    name: "11HP1VI1BP01E",
    dataType: "BOOL",
    comment: "Kontrolle Einschaltventil",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 516.2,
    name: "11HP1BP01ND",
    dataType: "BOOL",
    comment: "Kontrolle Niederdruck",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 516.4,
    name: "11HP1BF01NDIMP",
    dataType: "BOOL",
    comment: "Impuls",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 516.6,
    name: "11HP1BP01HD",
    dataType: "BOOL",
    comment: "Kontrolle Hochdruck",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 517.0,
    name: "11HP1BF01HDIMP",
    dataType: "BOOL",
    comment: "Impuls",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 532.0,
    name: "113450V01VI2KKPR01V",
    dataType: "BOOL",
    comment: "RESERVE",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 532.1,
    name: "113450V01VI2KKPR01R",
    dataType: "BOOL",
    comment: "RESERVE",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 532.2,
    name: "113450V01VI2KKPR02V",
    dataType: "BOOL",
    comment: "RESERVE",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 532.3,
    name: "113450V01VI2KKPR02R",
    dataType: "BOOL",
    comment: "RESERVE",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 533.0,
    name: "113450V01VI2KKPR01BER",
    dataType: "BOOL",
    comment: "Ventil bereit",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 533.1,
    name: "113450V01VI2KKPR02BER",
    dataType: "BOOL",
    comment: "Ventil bereit",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 522.6,
    name: "113450V01VI1KKPR01V",
    dataType: "BOOL",
    comment: "RESERVE",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 522.7,
    name: "113450V01VI1KKPR01R",
    dataType: "BOOL",
    comment: "RESERVE",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 523.0,
    name: "113450V01VI1KKPR02V",
    dataType: "BOOL",
    comment: "RESERVE",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 523.1,
    name: "113450V01VI1KKPR02R",
    dataType: "BOOL",
    comment: "RESERVE",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 523.3,
    name: "113450V01VI1KKPR01BER",
    dataType: "BOOL",
    comment: "Ventil bereit",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 523.4,
    name: "113450V01VI1KKPR02BER",
    dataType: "BOOL",
    comment: "Ventil bereit",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 523.5,
    name: "113450SB1VI1KKPR01BER",
    dataType: "BOOL",
    comment: "Ventil bereit",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 82.0,
    name: "113440R01PFWE7",
    dataType: "BOOL",
    comment: "E7 �berbr�ckung Schutzkreis",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 130.1,
    name: "113440R01KF1K36",
    dataType: "BOOL",
    comment: "Schutzkreis f�r Schwenkeinheit",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 56.2,
    name: "113440R01SFWE7",
    dataType: "BOOL",
    comment: "E7 Prozessgeschwindigkeit bei Single-Step",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 142.1,
    name: "113440R01KF1K36K",
    dataType: "BOOL",
    comment: "R�ckleseeingang Relaismodul",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 82.0,
    name: "11IG1SFRES1",
    dataType: "BOOL",
    comment: "Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 82.1,
    name: "11IG1SFRES2",
    dataType: "BOOL",
    comment: "Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 82.2,
    name: "11IG1SFRES3",
    dataType: "BOOL",
    comment: "Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 82.3,
    name: "11IG1SFRES4",
    dataType: "BOOL",
    comment: "Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 82.4,
    name: "11IG1SFRES5",
    dataType: "BOOL",
    comment: "Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 118.0,
    name: "11IG2PFRES1",
    dataType: "BOOL",
    comment: "Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 118.1,
    name: "11IG2PFWE2_3",
    dataType: "BOOL",
    comment: "E2 �berbr�ckung Schutzkreis Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 118.2,
    name: "11IG2PFWE2_2",
    dataType: "BOOL",
    comment: "E2 �berbr�ckung Schutzkreis Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 118.3,
    name: "11IG2PFWE2_1",
    dataType: "BOOL",
    comment: "E2 �berbr�ckung Schutzkreis Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 118.4,
    name: "11IG2PFRES2",
    dataType: "BOOL",
    comment: "Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 86.2,
    name: "11IG2SFWE2_1",
    dataType: "BOOL",
    comment: "E2 �berbr�ckung Schutzkreis Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 86.3,
    name: "11IG2SFWE2_2",
    dataType: "BOOL",
    comment: "E2 �berbr�ckung Schutzkreis Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 92.0,
    name: "11IG2SFWE2_3",
    dataType: "BOOL",
    comment: "E2 �berbr�ckung Schutzkreis Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 92.1,
    name: "11IG2SFW_4",
    dataType: "BOOL",
    comment: "Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 92.2,
    name: "11IG2SFW_5",
    dataType: "BOOL",
    comment: "Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 118.0,
    name: "11IG2SFRES1",
    dataType: "BOOL",
    comment: "Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 118.1,
    name: "11IG2SFRES2",
    dataType: "BOOL",
    comment: "Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 118.2,
    name: "11IG2SFRES3",
    dataType: "BOOL",
    comment: "Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 118.3,
    name: "11IG2SFRES4",
    dataType: "BOOL",
    comment: "Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 118.4,
    name: "11IG2SFRES5",
    dataType: "BOOL",
    comment: "Reserve",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 236.0,
    name: "123456OH1GP1",
    dataType: "BOOL",
    comment: "Achse X Schmierung Ein",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 236.1,
    name: "123456OH1GP2",
    dataType: "BOOL",
    comment: "Achse Z Schmierung Ein",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 236.0,
    name: "123456OH1GP1OK",
    dataType: "BOOL",
    comment: "Achse X Schmierung OK",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 236.1,
    name: "123456OH1GP1Err",
    dataType: "BOOL",
    comment: "Achsen X Schmierung Fehler",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 236.2,
    name: "123456OH1GP2OK",
    dataType: "BOOL",
    comment: "Achse Z Schmierung OK",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 236.3,
    name: "123456OH1GP2Err",
    dataType: "BOOL",
    comment: "Achsen Z Schmierung Fehler",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 238.0,
    name: "123456OH1K01BGE99aR",
    dataType: "BOOL",
    comment: "Thynkers-Absteckung 1 Z-Achse entriegelt",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 238.1,
    name: "123456OH1K01BGE99aV",
    dataType: "BOOL",
    comment: "Buhl-Absteckung 1 Z-Achse entriegelt",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 238.2,
    name: "123456OH1K01BGE99bR",
    dataType: "BOOL",
    comment: "Buhl -Absteckung 2 Z-Achse entriegelt",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 238.3,
    name: "123456OH1K01BGE99bV",
    dataType: "BOOL",
    comment: "Buhl -Absteckung 2 Z-Achse entriegelt",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 2064.0,
    name: "123456OH1AE1TAF1K100",
    dataType: "BOOL",
    comment: "Stellglieder Start",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 2051.0,
    name: "123456OH1AE1BGE1R",
    dataType: "BOOL",
    comment: "X-Achse in Station 3906",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 2051.1,
    name: "123456OH1AE1BGE1V",
    dataType: "BOOL",
    comment: "X-Achse in Station 3906-N",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 2064.0,
    name: "123456OH1AE1TAF1K100K",
    dataType: "BOOL",
    comment: "Kontrolle Stellglieder Start",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 2086.0,
    name: "123456OH1AE2TAF1K100",
    dataType: "BOOL",
    comment: "Stellglieder Start",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 2073.0,
    name: "123456OH1AE2BGE1R",
    dataType: "BOOL",
    comment: "Z-Achse in Grundstellung oben",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 2086.0,
    name: "123456OH1AE2TAF1K100K",
    dataType: "BOOL",
    comment: "Kontrolle Stellglieder Start",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 554.2,
    name: "123456OH1VI2BGE11aR",
    dataType: "BOOL",
    comment: "Spannzylinder zur�ck",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 554.3,
    name: "123456OH1VI2BGE11aV",
    dataType: "BOOL",
    comment: "Spannzylinder vorn",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 554.4,
    name: "123456OH1VI2BGE11bR",
    dataType: "BOOL",
    comment: "Spannzylinder zur�ck",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 554.5,
    name: "123456OH1VI2BGE11bV",
    dataType: "BOOL",
    comment: "Spannzylinder vorn",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 554.6,
    name: "123456OH1VI2BGE11cR",
    dataType: "BOOL",
    comment: "Spannzylinder zur�ck",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 554.7,
    name: "123456OH1VI2BGE11cV",
    dataType: "BOOL",
    comment: "Spannzylinder vorn",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 555.0,
    name: "123456OH1VI2BGE12aR",
    dataType: "BOOL",
    comment: "Spannzylinder zur�ck",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 555.1,
    name: "123456OH1VI2BGE12aV",
    dataType: "BOOL",
    comment: "Spannzylinder vorn",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 555.2,
    name: "123456OH1VI2BGE12bR",
    dataType: "BOOL",
    comment: "Spannzylinder zur�ck",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 555.3,
    name: "123456OH1VI2BGE12bV",
    dataType: "BOOL",
    comment: "Spannzylinder vorn",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 555.4,
    name: "123456OH1VI2BGE13aR",
    dataType: "BOOL",
    comment: "Spannzylinder zur�ck",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 555.5,
    name: "123456OH1VI2BGE13aV",
    dataType: "BOOL",
    comment: "Spannzylinder vorn",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 555.6,
    name: "123456OH1VI2BGE13bR",
    dataType: "BOOL",
    comment: "Spannzylinder zur�ck",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 555.7,
    name: "123456OH1VI2BGE13bV",
    dataType: "BOOL",
    comment: "Spannzylinder vorn",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 557.4,
    name: "123456OH1VI2BGT13",
    dataType: "BOOL",
    comment: "Teilkontrolle Seitenteil innen",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 557.6,
    name: "123456OH1VI2BGT12",
    dataType: "BOOL",
    comment: "Teilkontrolle Seitenteil innen",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 557.7,
    name: "123456OH1VI2BGT11",
    dataType: "BOOL",
    comment: "Teilkontrolle Seitenteil innen",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 244.0,
    name: "123456OH1BGS10V",
    dataType: "BOOL",
    comment: "Handligs-Einheit",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 0.0,
    name: "1IA1PFK83PIN1",
    dataType: "BOOL",
    comment: "Standmenge",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 0.1,
    name: "1IA1PFK83PIN2",
    dataType: "BOOL",
    comment: "Standmenge",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 2,
    address: 0.2,
    name: "1IA1PFK83PIN3",
    dataType: "BOOL",
    comment: "Standmenge",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 0.7,
    name: "1IA1SFWE7",
    dataType: "BOOL",
    comment: "E7 �berbr�ckung Verriegelung",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 6.1,
    name: "1IA1SFA1",
    dataType: "BOOL",
    comment: "Antriebeschalter",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 1.0,
    name: "1BS1TB1NGIO",
    dataType: "BOOL",
    comment: "Kontrolle Netzger�t in Ordnung",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 1.1,
    name: "1BS1BA1NETZ",
    dataType: "BOOL",
    comment: "Netzkontrolle in Ordnung",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 1.2,
    name: "1BS1BT1",
    dataType: "BOOL",
    comment: "Schranktemperatur in Ordnung",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 1.3,
    name: "1BS1/SIFA",
    dataType: "BOOL",
    comment: "Sammelmeldung kein Sicherungsfall",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 517.6,
    name: "1ED1/SIFA",
    dataType: "BOOL",
    comment: "Sammelmeldung kein Sicherungsfall",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 517.7,
    name: "1ED1TB1NGIO",
    dataType: "BOOL",
    comment: "Kontrolle Netzger�t in Ordnung",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
  {
    operandIdentifier: 1,
    address: 0.1,
    name: "1ES1QB1K",
    dataType: "BOOL",
    comment: "Leistung ist Ein ES-Schrank",
    accessibleFromHmi: false,
    visibleInHmiEngineering: false,
    writableFromHmi: false,
  },
];

export const homeFormSubmitWithIds: HomeFormReponse = homeFormSubmit.map(
  (el, id) => ({
    id,
    ...el,
  })
);
