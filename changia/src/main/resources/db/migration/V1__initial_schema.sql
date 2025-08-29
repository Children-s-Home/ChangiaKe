


-- -------------------------------
-- 1) Roles & Permissions
-- -------------------------------
CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    created_by INT,
    updated_by INT
);

CREATE TABLE permissions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT
);

CREATE TABLE role_permissions (
    role_id INT REFERENCES roles(id) ON DELETE CASCADE,
    permission_id INT REFERENCES permissions(id) ON DELETE CASCADE,
    PRIMARY KEY(role_id, permission_id)
);

-- -------------------------------
-- 2) Homes
-- -------------------------------
CREATE TABLE homes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    type VARCHAR(50),
    location JSONB NOT NULL,
    contact_info JSONB,
    leader INT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    created_by INT,
    updated_by INT,
    approved_by INT
);

-- -------------------------------
-- 3) Users
-- -------------------------------
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role_id INT REFERENCES roles(id),
    home_id INT REFERENCES homes(id),
    staff_position VARCHAR(50),
    bio TEXT,
    avatar_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    approved_by INT REFERENCES users(id)
);


-- -------------------------------
-- 5) Care Home Members (not users)
-- -------------------------------
CREATE TABLE members (
    id SERIAL PRIMARY KEY,
    home_id INT NOT NULL REFERENCES homes(id) ON DELETE CASCADE,
    name VARCHAR(100) NOT NULL,
    date_of_birth DATE,
    details JSONB,
    created_at TIMESTAMP DEFAULT NOW(),
    created_by INT
);

-- -------------------------------
-- 6) Achievements
-- -------------------------------
CREATE TABLE achievements (
    id SERIAL PRIMARY KEY,
    home_id INT NOT NULL REFERENCES homes(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    date DATE,
    media_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW()
);

-- -------------------------------
-- 7) Needs
-- -------------------------------
CREATE TABLE needs (
    id SERIAL PRIMARY KEY,
    home_id INT NOT NULL REFERENCES homes(id) ON DELETE CASCADE,
    type VARCHAR(50),      -- donation, volunteer, etc.
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) DEFAULT 'OPEN',
    created_at TIMESTAMP DEFAULT NOW()
);
-- -------------------------------
-- Add Foreign Key Constraints (deferred to avoid circular dependency)
-- -------------------------------
ALTER TABLE homes ADD CONSTRAINT fk_homes_leader FOREIGN KEY (leader) REFERENCES users(id);
ALTER TABLE homes ADD CONSTRAINT fk_homes_created_by FOREIGN KEY (created_by) REFERENCES users(id);
ALTER TABLE homes ADD CONSTRAINT fk_homes_updated_by FOREIGN KEY (updated_by) REFERENCES users(id);
ALTER TABLE homes ADD CONSTRAINT fk_homes_approved_by FOREIGN KEY (approved_by) REFERENCES users(id);
ALTER TABLE members ADD CONSTRAINT fk_members_created_by FOREIGN KEY (created_by) REFERENCES users(id);
ALTER TABLE roles ADD CONSTRAINT fk_roles_created_by FOREIGN KEY (created_by) REFERENCES users(id);
ALTER TABLE roles ADD CONSTRAINT fk_roles_updated_by FOREIGN KEY (updated_by) REFERENCES users(id);