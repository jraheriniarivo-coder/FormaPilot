# FormaPilot LMS — starter prototype

A bilingual (French/English) static frontend foundation for an LMS. It is a prototype only: sample learner/course data is hard-coded in `js/app.js`. It is not a production LMS and has no authentication or persistent database yet.

## Included in this milestone

- Responsive dashboard layout
- Role preview: staff, trainer, admin, management, manager
- French/English interface switch
- Demo course catalogue and activity table
- CSV export from sample data
- Placeholder for the future Supabase connection

## Requirements

- A modern browser
- Visual Studio Code (recommended)
- VS Code Live Server extension (recommended)
- Git/GitHub for version control (recommended)

## Run locally

1. Extract this ZIP into a folder named `formapilot-lms`.
2. Open that folder in VS Code.
3. Install the **Live Server** extension if you do not already have it.
4. In VS Code, right-click `index.html` and select **Open with Live Server**.
5. Test the language switch, navigation, role preview, course cards and CSV export.

You can also serve the directory with Python if installed:
`python -m http.server 5500`
Then open `http://localhost:5500`.

Do not simply double-click `index.html`: JavaScript modules can behave inconsistently under `file://`.

## Folder structure

```text
formapilot-lms/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   └── supabase-client.js
└── README.md
```

## Important prototype limitations

- The role selector is only a UI preview; it does not grant or enforce permissions.
- All data is fictional and stored in JavaScript.
- CSV export is a demonstration, not an authoritative report.
- No login, password reset, database persistence, PDF conversion, quiz engine, skills evaluation, certificates or Excel/PDF reporting is implemented yet.
- Do not enter real staff data.

## Next implementation milestones

1. Confirm the interface and folder structure.
2. Create a separate Supabase project for the LMS, leaving any existing project unchanged.
3. Design and review the PostgreSQL schema and Row Level Security policies before applying SQL.
4. Connect Supabase Auth and profile/organization records.
5. Implement role authorization server/database-side, not just in the interface.
6. Implement HTML course content, safe course isolation and progress persistence.
7. Add assignments, quiz attempts and skills assessments.
8. Add reliable CSV/XLSX/PDF exports from database queries.
9. Add PDF text extraction/OCR and trainer-reviewed conversion to interactive learning modules.
10. Test permissions, backups, deployment and error states before production.

## Security principles

- A frontend publishable/anon key is not an authorization mechanism by itself; database access must be protected with RLS.
- Never commit Supabase secret or `service_role` keys.
- Treat uploaded HTML as untrusted content. Isolate it; do not inject it into the main app with unrestricted `innerHTML`.
- Keep external client organizations isolated at the database-policy level.
