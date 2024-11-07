// src/components/biography/biographyViewModel.js
import ko from 'knockout';
import profilePhoto from '../assets/profilePicture.jpg';

export default function BiographyViewModel(params) {
    // Define observables for the component
    this.photo = ko.observable(profilePhoto); // Default profile photo
    this.title = ko.observable(params.title || "Software Engineer");
    this.summary = ko.observable(params.summary || "Experienced software engineer with expertise in web technologies and data solutions.");
}
