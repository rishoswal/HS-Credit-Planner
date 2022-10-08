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
                        { "name": "English 9 Redmond", "course_id": "" },
                        { "name": "English 9 Honors", "course_id": "" }
                    ],
                "social_studies":
                    [
                        { "name": "", "course_id": "" },
                        { "name": "", "course_id": "" },
                        { "name": "", "course_id": "" },
                    ]
            },
            "class10":
            {
                "english":
                    [
                        { "name": "English 10", "course_id": "" },
                        { "name": "English 10 Honors", "course_id": "" }
                    ],
                "social_studies":
                    [
                        { "name": "", "course_id": "" },
                        { "name": "", "course_id": "" },
                        { "name": "", "course_id": "" },
                    ]
            },
            "class11":
            {
                "english":
                    [
                        { "name": "English 11", "course_id": "" },
                        { "name": "English 11 Honors", "course_id": "" }
                    ],
                "social_studies":
                    [
                        { "name": "", "course_id": "" },
                        { "name": "", "course_id": "" },
                        { "name": "", "course_id": "" },
                    ]
            },
            "class12":
            {
                "english":
                    [
                        { "name": "English 12", "course_id": "" },
                        { "name": "English 12 Honors", "course_id": "" }
                    ],
                "social_studies":
                    [
                        { "name": "", "course_id": "" },
                        { "name": "", "course_id": "" },
                        { "name": "", "course_id": "" },
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
        }

    ];

function GetCatalog(schoolId)
{
    var match = null;

    course_collection.forEach(school => {

        if (school.school_id === schoolId)
        {
            match = school;
        }

    });

    return match;
}




