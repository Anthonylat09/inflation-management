# Inflabudget

## Description
L'application permet de retracer son activité financière.
Un utilisateur est censé pouvoir se connecter, ajouter des transactions faites et planifier un budget mensuel.

## Visuels
Vous pouvez voir les maquettes de l'application sur [notre figma](https://www.figma.com/file/4VXhYpTNAilBTjuTyA8zNF/Projet-Informatique?type=design&node-id=14%3A656&mode=design&t=oysUCJ67MVPNyyvj-1)

# 📘 Guide de Démarrage du Projet Inflation Management

Bienvenue dans le projet **Inflation Management** ! Ce guide vous explique les étapes à suivre pour cloner, configurer et lancer le projet à l'aide de **Docker Compose**.

## 🛠 Prérequis
Avant de commencer, assurez-vous que les éléments suivants sont installés sur votre machine :

- **Docker**
- **Docker Compose**

Vous pouvez vérifier si Docker est installé en exécutant la commande suivante :

```bash
docker --version
```

Si Docker n'est pas installé, veuillez suivre les instructions officielles sur le site [Docker](https://www.docker.com/get-started).

---

## 🚀 Étapes de Démarrage
Suivez ces étapes pour lancer le projet après l'avoir cloné.

### 1️⃣ Cloner le dépôt

```bash
git clone https://github.com/votre-utilisateur/inflation-management.git
cd inflation-management
```

### 2️⃣ Vérifier vos droits Docker
Assurez-vous que votre utilisateur est ajouté au groupe Docker afin d'éviter les erreurs de permissions.

Exécutez les commandes suivantes **une seule fois** :

```bash
sudo usermod -aG docker $USER
newgrp docker
```

Cela permet à votre utilisateur d'exécuter des commandes Docker sans utiliser `sudo`.

⚠️ **Si vous avez déjà fait cette étape, vous pouvez la sauter.**

### 3️⃣ Lancer le projet avec Docker Compose

Une fois les permissions configurées, lancez le projet avec :

```bash
docker-compose up --build
```

Cette commande :
- Construira les images Docker nécessaires (backend, frontend, base de données).
- Lancer les services associés.

### 4️⃣ Accéder à l'application

Une fois que les services sont démarrés, vous pouvez accéder à l'application via les URL suivantes :

- **Frontend** : [http://localhost:3000](http://localhost:3000)
- **Backend API** : [http://localhost:8080](http://localhost:8080)

### 5️⃣ Arrêter les services
Pour arrêter les services en cours d'exécution, exécutez :

```bash
docker-compose down
```

Si vous souhaitez également supprimer les volumes et les conteneurs orphelins, utilisez :

```bash
docker-compose down --volumes --remove-orphans
```

---

## 🐛 Résolution des Problèmes

### 🔴 Erreur de Permission :
Si vous obtenez une erreur de type :

```
PermissionError: [Errno 13] Permission denied
```

Cela signifie que votre utilisateur n'a pas les permissions nécessaires pour exécuter Docker. Suivez les étapes mentionnées dans la section **2️⃣ Vérifier vos droits Docker**.

### 🟡 Service Backend Non Disponible :
Si le backend ne se lance pas correctement, assurez-vous que le service MySQL est bien en cours d'exécution. Docker Compose doit gérer cela automatiquement, mais vous pouvez vérifier les logs avec :

```bash
docker-compose logs
```

---

## 🧪 Structure du Projet

- **InflationManagementBackEnd** : Contient le code du backend (Spring Boot).
- **inflationmanagementfrontend** : Contient le code du frontend (React).
- **docker-compose.yml** : Fichier de configuration pour Docker Compose.

---

## 🎉 Félicitations !
Vous êtes prêt à utiliser le projet Inflation Management. N'hésitez pas à contribuer ou à signaler des bugs. Bonne chance ! 🚀




## Auteurs
 - MBOUP Issa
 - COLY François Xavier
 - NDIAYE Antoine Latgrand
 - SONKO Ndeye Fatou
 - EL HABCHAOUI Nawfal
