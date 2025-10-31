# Requirements Document

## Introduction

The Student Opportunity Platform addresses the critical information asymmetry and friction that TUM students face when discovering and applying for internships, extracurricular programs, and academic opportunities. The platform provides blunt, peer-reviewed information about opportunities with clear barrier tags and structured data to help students make informed decisions quickly. The initial focus is on mandatory pre-internships (Vorpraktika) for technical degree programs, with expansion to broader opportunities once traction is established.

## Requirements

### Requirement 1: Opportunity Discovery and Filtering

**User Story:** As a TUM student, I want to quickly find relevant opportunities for my program and semester, so that I don't waste time on irrelevant or inaccessible options.

#### Acceptance Criteria

1. WHEN a user visits the platform THEN the system SHALL display opportunities in a scannable table format without requiring login
2. WHEN a user applies program and semester filters THEN the system SHALL show only opportunities relevant to their academic status
3. WHEN a user views an opportunity THEN the system SHALL display barrier level (Low/Medium/High), payment status, and deadline information
4. IF an opportunity has a deadline THEN the system SHALL prominently display the exact date or relative timing
5. WHEN a user sorts opportunities THEN the system SHALL allow sorting by deadline, barrier level, payment status, and relevance

### Requirement 2: Peer Review System

**User Story:** As a student who has completed an internship or program, I want to share honest feedback about my experience, so that other students can make informed decisions.

#### Acceptance Criteria

1. WHEN a user submits a review THEN the system SHALL require structured feedback including expectation vs reality, recommendation status, and time commitment
2. WHEN a user writes a review THEN the system SHALL enforce a template with fields for "What did you expect?", "What actually happened?", "Would you do it again?", and "Hours per week"
3. IF a review contains personal names or potentially defamatory content THEN the system SHALL flag it for moderation
4. WHEN multiple reviews exist for an opportunity THEN the system SHALL display an auto-generated summary highlighting common themes
5. WHEN a user views reviews THEN the system SHALL show reviews from students with similar academic backgrounds first

### Requirement 3: Blunt Information Presentation

**User Story:** As a time-pressed student, I want to see honest, unfiltered information about opportunities, so that I can quickly assess if something is worth my time.

#### Acceptance Criteria

1. WHEN displaying opportunity information THEN the system SHALL present data in a clean, text-focused format similar to Hacker News
2. WHEN showing opportunity descriptions THEN the system SHALL prioritize factual information over marketing language
3. WHEN displaying reviews THEN the system SHALL show both positive and negative feedback without censoring critical opinions
4. IF an opportunity has consistently negative reviews THEN the system SHALL clearly indicate this in the summary
5. WHEN a user scans the main page THEN they SHALL be able to extract value within 10 seconds

### Requirement 4: Mandatory Internship Focus

**User Story:** As a first-semester technical student, I want to understand my Vorpraktikum requirements and find suitable options, so that I don't delay my studies.

#### Acceptance Criteria

1. WHEN a new user visits the platform THEN the system SHALL prominently feature a "Semester 1 Survival Kit" section
2. WHEN displaying Vorpraktikum opportunities THEN the system SHALL clearly indicate which programs they satisfy
3. WHEN showing internship deadlines THEN the system SHALL highlight urgent applications and typical lead times
4. IF a student's program requires specific internship criteria THEN the system SHALL filter opportunities accordingly
5. WHEN a user views internship details THEN the system SHALL show realistic expectations about tasks and learning outcomes

### Requirement 5: Barrier Classification System

**User Story:** As a student evaluating opportunities, I want to understand the entry requirements and selectivity, so that I can focus on realistic options for my level.

#### Acceptance Criteria

1. WHEN an opportunity is posted THEN the system SHALL require classification as Low, Medium, or High barrier
2. WHEN displaying barrier levels THEN the system SHALL provide clear definitions for each level
3. IF an opportunity is tagged as High barrier THEN the system SHALL display specific requirements or selection criteria
4. WHEN a user filters by barrier level THEN the system SHALL show opportunities matching their selected criteria
5. WHEN reviewing barrier classifications THEN peer reviewers SHALL be able to suggest corrections based on their experience

### Requirement 6: Timeline and Deadline Management

**User Story:** As a student planning my academic year, I want to see upcoming deadlines and plan ahead for opportunities, so that I don't miss important applications.

#### Acceptance Criteria

1. WHEN viewing opportunities THEN the system SHALL display application deadlines prominently with color coding for urgency
2. WHEN a deadline is approaching THEN the system SHALL highlight opportunities that close within 30 days
3. IF deadline information is unavailable THEN the system SHALL show typical application periods based on historical data
4. WHEN a user views their program timeline THEN the system SHALL show recommended actions for each semester
5. WHEN displaying summer opportunities THEN the system SHALL flag them during the preceding semester for proper lead time

### Requirement 7: Quality Control and Moderation

**User Story:** As a platform user, I want to trust that the information is accurate and helpful, so that I can rely on it for important decisions.

#### Acceptance Criteria

1. WHEN a review is submitted THEN the system SHALL check for structured content and flag incomplete submissions
2. WHEN potentially problematic content is detected THEN the system SHALL queue it for manual review before publication
3. IF a review appears to be spam or fake THEN the system SHALL have mechanisms to flag and remove it
4. WHEN displaying aggregated data THEN the system SHALL indicate the number of reviews and their recency
5. WHEN users report issues with content THEN the system SHALL provide a clear reporting mechanism

### Requirement 8: Mobile-First Accessibility

**User Story:** As a student who primarily uses mobile devices, I want the platform to work seamlessly on my phone, so that I can check opportunities between classes.

#### Acceptance Criteria

1. WHEN accessing the platform on mobile THEN the system SHALL display content in a responsive, touch-friendly format
2. WHEN viewing tables on mobile THEN the system SHALL prioritize the most important columns and allow horizontal scrolling
3. WHEN reading reviews on mobile THEN the system SHALL format text for easy reading without excessive scrolling
4. IF the user has a slow connection THEN the system SHALL load core content quickly without heavy graphics
5. WHEN navigating on mobile THEN the system SHALL provide clear, accessible navigation elements
