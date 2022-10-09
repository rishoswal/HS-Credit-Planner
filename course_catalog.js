let school_districts_collection =
    [
        {
            "school_district_id": "101",
            "school_district_name": "Lake Washington School District"
        },
        {
            "school_district_id": "102",
            "school_district_name": "Issaquah School District"
        },
        {
            "school_district_id": "103",
            "school_district_name": "Riverview School District"
        },
        {
            "school_district_id": "104",
            "school_district_name": "Skykomish School District"
        },
        {
            "school_district_id": "105",
            "school_district_name": "Snoqualmie Valley School District"
        },
        {
            "school_district_id": "106",
            "school_district_name": "Northshore School District"
        },
        {
            "school_district_id": "107",
            "school_district_name": "Monroe School District"
        },
        {
            "school_district_id": "108",
            "school_district_name": "Snohomish School District"
        },
        {
            "school_district_id": "109",
            "school_district_name": "Lake Stevens School District"
        },
        {
            "school_district_id": "110",
            "school_district_name": "Arlington School District"
        },
        {
            "school_district_id": "111",
            "school_district_name": "Granite Falls School District"
        },
    ];

let course_collection =
    [
        {
            "school_id": "1001",
            "school_name": "Redmond High School",
            "school_district_id": "101",
            "class9":
            {
                "english":
                    [
                        {   
                            "name": "English 9", 
                            "sem1_course_id": "eng121", 
                            "sem2_course_id": "eng122",
                            "course_pre_req": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "1.0",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true"
                        },
                        {   
                            "name": "Honors English 9", 
                            "sem1_course_id": "eng171", 
                            "sem2_course_id": "eng172",
                            "course_pre_req": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "1.0",
                            "hw_time": "45",
                            "honors_course" : "true",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true"
                        },
                        {   
                            "name": "Speech & Debate", 
                            "sem1_course_id": "eng661", 
                            "sem2_course_id": "",
                            "course_pre_req": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "35",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false"
                        }
                    ],
                "social_studies":
                    [
                        {   
                            "name": "World History", 
                            "sem1_course_id": "soc121", 
                            "sem2_course_id": "",
                            "course_pre_req": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true"
                        },
                        {   
                            "name": "Honors World History", 
                            "sem1_course_id": "soc171", 
                            "sem2_course_id": "soc172",
                            "course_pre_req": "",
                            "grade_req": "",
                            "sem_count": "2",
                            "credit_count": "1.0",
                            "hw_time": "45",
                            "honors_course" : "true",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true"
                        }
                    ]
            },
            "class10":
            {
                "english":
                    [
                        {   
                            "name": "English 10", 
                            "sem1_course_id": "eng221", 
                            "sem2_course_id": "eng222",
                            "course_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "1.0",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true"
                        },
                        {   
                            "name": "Honors English 10", 
                            "sem1_course_id": "eng271", 
                            "sem2_course_id": "eng272",
                            "course_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "1.0",
                            "hw_time": "45",
                            "honors_course" : "true",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true"
                        },
                        {   
                            "name": "Creative Writing", 
                            "sem1_course_id": "eng611", 
                            "sem2_course_id": "",
                            "course_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "45",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true"
                        },
                        {   
                            "name": "Playwriting", 
                            "sem1_course_id": "eng621", 
                            "sem2_course_id": "",
                            "course_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false"
                        },
                        {   
                            "name": "Speech & Debate", 
                            "sem1_course_id": "eng661", 
                            "sem2_course_id": "",
                            "course_pre_req": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "35",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false"
                        }
                    ],
                "social_studies":
                    [
                        {   
                            "name": "Contemporary World Problems", 
                            "sem1_course_id": "soc221", 
                            "sem2_course_id": "soc222",
                            "course_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "1.0",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true"
                        },
                        {   
                            "name": "AP World History", 
                            "sem1_course_id": "soc281", 
                            "sem2_course_id": "soc282",
                            "course_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "1.0",
                            "hw_time": "45",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true"
                        },
                        {   
                            "name": "Introduction to Philosophy", 
                            "sem1_course_id": "soc675", 
                            "sem2_course_id": "",
                            "course_pre_req": "soc121",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false"
                        },
                        {   
                            "name": "International Relations", 
                            "sem1_course_id": "soc711", 
                            "sem2_course_id": "",
                            "course_pre_req": "soc121",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false"
                        },
                        {   
                            "name": "History through Film", 
                            "sem1_course_id": "soc903", 
                            "sem2_course_id": "",
                            "course_pre_req": "soc121",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false"
                        }
                    ]
            },
            "class11":
            {
                "english":
                    [
                        {   
                            "name": "English 11", 
                            "sem1_course_id": "eng321", 
                            "sem2_course_id": "eng322",
                            "course_pre_req": "",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "1.0",
                            "hw_time": "45",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true"
                        },
                        {   
                            "name": "AP English Language & Comp.", 
                            "sem1_course_id": "eng491", 
                            "sem2_course_id": "eng492",
                            "course_pre_req": "",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "1.0",
                            "hw_time": "45",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true"
                        },
                        {   
                            "name": "AP English Literature & Comp.", 
                            "sem1_course_id": "eng495", 
                            "sem2_course_id": "eng496",
                            "course_pre_req": "",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "1.0",
                            "hw_time": "45",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true"
                        },
                        {   
                            "name": "Film Analysis", 
                            "sem1_course_id": "eng521", 
                            "sem2_course_id": "",
                            "course_pre_req": "",
                            "grade_req": "11",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "25",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false"
                        },
                        {   
                            "name": "Creative Writing", 
                            "sem1_course_id": "eng611", 
                            "sem2_course_id": "",
                            "course_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "45",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true"
                        },
                        {   
                            "name": "Playwriting", 
                            "sem1_course_id": "eng621", 
                            "sem2_course_id": "",
                            "course_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false"
                        },
                        {   
                            "name": "Speech & Debate", 
                            "sem1_course_id": "eng661", 
                            "sem2_course_id": "",
                            "course_pre_req": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "35",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false"
                        }
                    ],
                "social_studies":
                    [
                        {   
                            "name": "U.S. Social Studies", 
                            "sem1_course_id": "soc321", 
                            "sem2_course_id": "soc322",
                            "course_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "1.0",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true"
                        },
                        {   
                            "name": "AP U.S. History", 
                            "sem1_course_id": "soc381", 
                            "sem2_course_id": "soc382",
                            "course_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "2",
                            "credit_count": "1.0",
                            "hw_time": "45",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true"
                        },
                        {   
                            "name": "Introduction to Philosophy", 
                            "sem1_course_id": "soc675", 
                            "sem2_course_id": "",
                            "course_pre_req": "soc121",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false"
                        },
                        {   
                            "name": "International Relations", 
                            "sem1_course_id": "soc711", 
                            "sem2_course_id": "",
                            "course_pre_req": "soc121",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false"
                        },
                        {   
                            "name": "History through Film", 
                            "sem1_course_id": "soc903", 
                            "sem2_course_id": "",
                            "course_pre_req": "soc121",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false"
                        }
                    ]
            },
            "class12":
            {
                "english":
                    [
                        {   
                            "name": "English 12", 
                            "sem1_course_id": "eng421", 
                            "sem2_course_id": "eng422",
                            "course_pre_req": "",
                            "grade_req": "12",
                            "sem_count": "2",
                            "credit_count": "1.0",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true"
                        },
                        {   
                            "name": "Honors English 12", 
                            "sem1_course_id": "eng471", 
                            "sem2_course_id": "eng472",
                            "course_pre_req": "",
                            "grade_req": "12",
                            "sem_count": "2",
                            "credit_count": "1.0",
                            "hw_time": "45",
                            "honors_course" : "true",
                            "ap_course": "false",
                            "elective": "false",
                            "CADR": "true"
                        },
                        {   
                            "name": "AP English Language & Comp.", 
                            "sem1_course_id": "eng491", 
                            "sem2_course_id": "eng492",
                            "course_pre_req": "",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "1.0",
                            "hw_time": "45",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true"
                        },
                        {   
                            "name": "AP English Literature & Comp.", 
                            "sem1_course_id": "eng495", 
                            "sem2_course_id": "eng496",
                            "course_pre_req": "",
                            "grade_req": "11",
                            "sem_count": "2",
                            "credit_count": "1.0",
                            "hw_time": "45",
                            "honors_course" : "false",
                            "ap_course": "true",
                            "elective": "false",
                            "CADR": "true"
                        },
                        {   
                            "name": "Film Analysis", 
                            "sem1_course_id": "eng521", 
                            "sem2_course_id": "",
                            "course_pre_req": "",
                            "grade_req": "11",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "25",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false"
                        },
                        {   
                            "name": "Creative Writing", 
                            "sem1_course_id": "eng611", 
                            "sem2_course_id": "",
                            "course_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "45",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "true"
                        },
                        {   
                            "name": "Playwriting", 
                            "sem1_course_id": "eng621", 
                            "sem2_course_id": "",
                            "course_pre_req": "",
                            "grade_req": "10",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "30",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false"
                        },
                        {   
                            "name": "Speech & Debate", 
                            "sem1_course_id": "eng661", 
                            "sem2_course_id": "",
                            "course_pre_req": "",
                            "grade_req": "",
                            "sem_count": "1",
                            "credit_count": "0.5",
                            "hw_time": "35",
                            "honors_course" : "false",
                            "ap_course": "false",
                            "elective": "true",
                            "CADR": "false"
                        }
                    ],
                "social_studies":
                    [

                    ]
            }
        },

        {
            "school_id": "1002",
            "school_name": "Eastlake High School",
            "school_district_id": "101",
            "class9":
            {
                "english":
                    [
                        { "name": "English 9 Eastlake", "course_id": "" },
                        { "name": "English 9 Honors", "course_id": "" }
                    ],
                "social_studies":
                    [
                        { "name": "", "course_id": "" },
                        { "name": "", "course_id": "" },
                        { "name": "", "course_id": "" },
                    ]
            },
        },

        {
            "school_id": "1003",
            "school_name": "Arlington High School",
            "school_district_id": "110",
            "class9":
            {
                "english":
                    [
                        { "name": "English 9 Arlington", "course_id": "" },
                        { "name": "English 9 Honors", "course_id": "" }
                    ],
                "social_studies":
                    [
                        { "name": "", "course_id": "" },
                        { "name": "", "course_id": "" },
                        { "name": "", "course_id": "" },
                    ]
            },
        }

    ];





