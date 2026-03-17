# Meal-Tracker
The meal tracker mobile application is a single user app. It is lightweight and works offline; there is no need for an internet connection.
This mobile application solves the problem: organizing nutritional data so personal goals are known as met or missed.
Each person has different goals that stem from different dietary needs. These are the users considered for this mobile application, substantiating the needs for a single user mobile application.
People may or may not have an internet connection, yet still need to track dietary information. Therefore, this mobile application is lightweight and non-dependant upon an internet connection.
The meal tracker mobile application is supported both on iOS and Android devices to serve a larger community of users.

# Features
  ## Dynamically Generated User Interface
  Upon first downloading the mobile application and starting it, the user is walked through an initial onboarding process to configure the meal tracker to their personal needs. The onboarding process
  explains labels, creating new dietary goals, toggling nutrient tracking on/off per nutrient, setting goal amounts per nutrient (i.e. 30 grams of protein). After the onboarding tutorial, the user
  may adjust the tracker to their personal needs. Once the user finished the inital setup and configuration of their preferences, a daily breakdown of those goals are formed into a concise card that
  is displayed on their home screen. This daily nutritional summary is then used in projections when the user creates new meals within a day. The projection is impacted directly by the foods that the
  user chooses. Therefore, each food item impacts the daily nutritional summary according to the nutritional data associated with that food item and is compounded with other foods within a meal.

  ## Custom Food Creation
  There is a baseline of foods that are incorporated during the development cycle which may be augmented later through APIs, (i.e. Wal-Mart, Kroger). However, it is possible that in different regions
  where these markets are located may be created with different nutrional values, and not all food consumed derives from products from these companies. A person may cook a homemade meal, tracking the 
  nutrional data of a homemade meal is particularly difficult due to the serving sizes of recipes. Therefore, a custom food like homemade spaghetti and meatballs may differ from person to person based\
  upon the ingredients either person uses or from where the ingredients are sourced. Custom foods require a one-time setup with a person's baseline and can be easily adjusted if a new ingredient is introduced
  or if a regular ingredient is omitted.

  ## Food Library
  The Food Library feature is a list of custom foods created by the acting user. Custom foods are not shared between users. There are no associated recipes, the custom foods primarily track a users nutrional data
  through the recipes at their own disposal. Therefore, recipe sharing and meal tracking are separate from each user. 

  ## Meal Tracking
  A meal consists of one or many different food items. Generally, people breakdown their diet upon three different meal times, a breakfast, a lunch, and a dinner. Snacks is included as an additional meal option in this
  application for more precise tracking should the user so desire. A snack is food item eaten outside of a person's dedicated meal times. Each meal aggregates the food items incorporated therein and contributes to the
  overall daily nutritional summary of goals that a user sets in their preferences.
