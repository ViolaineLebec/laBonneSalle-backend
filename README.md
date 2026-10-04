# laBonneSalle - Backend

Ce dépôt contient l'API REST backend pour le projet **laBonneSalle**, une application de gestion et de réservation de salles. La partie interface utilisateur se trouve dans le dépôt [laBonneSalle-frontend](https://github.com/).

## 🚀 Architecture du projet

Le projet est structuré selon une architecture en couches basée sur Node.js et TypeScript :

- **Controllers** (`/controllers`) : Gestion des requêtes HTTP et réponses pour les utilisateurs, salles et réservations.
- **Services** (`/services`) : Logique métier de l'application.
- **Repositories** (`/repositories`) : Interaction directe avec la base de données.
- **DTOs** (`/DTO`) : Validation et structuration des objets de transfert de données.
- **Middlewares** (`/middlewares`) : Vérifications et sécurisation des routes (ex: validations personnalisées pour les salles).
- **Routes** (`/routes`) : Définition des endpoints API (`user.routes.ts`, `room.routes.ts`, `reservation.routes.ts`).

---

## 🛠️ Technologies utilisées

- **Langage** : TypeScript
- **Runtime** : Node.js
- **Framework Web** : Express.js
- **Base de données / ORM** : MySQL / Prisma

---

## 📌 Fonctionnalités principales

### 👤 Gestion des Utilisateurs (`/users`)
- Inscription et connexion / authentification des utilisateurs.
- Gestion du profil utilisateur.

### 🏢 Gestion des Salles (`/rooms`)
- Consultation de la liste des salles disponibles.
- Ajout, modification et suppression de salles (avec validation via middleware).
- Recherche et filtrage selon la capacité, les équipements et la disponibilité.

### 📅 Gestion des Réservations (`/reservations`)
- Création et annulation de réservations de salles.
- Vérification des conflits de créneaux horaires.
- Historique des réservations par utilisateur.

---

## ⚙️️ Installation et démarrage

### Installer les dépendances
npm install

### Lancer le serveur en mode développement
npm run dev

Le serveur sera accessible sur http://localhost:3000.

---

## 🔗 Intégration Frontend
Ce backend fournit l'API REST consommée par l'application cliente :
👉 Dépôt Frontend : laBonneSalle-frontend
