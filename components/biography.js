// src/components/biography/biography.js
import ko from 'knockout';
import BiographyViewModel from '../viewModels/biographyViewModel'; // Import the ViewModel
import biographyTemplate from './biography.html';      // Import the HTML template

// Register the component with Knockout
ko.components.register('biography-component', {
    viewModel: BiographyViewModel,
    template: biographyTemplate
});
