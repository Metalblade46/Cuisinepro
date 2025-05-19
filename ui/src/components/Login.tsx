"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  TextField,
  PrimaryButton,
  DefaultButton,
  Text,
  Pivot,
  PivotItem,
  mergeStyleSets,
} from "@fluentui/react";

import { UtensilsCrossed } from "lucide-react";

const classNames = mergeStyleSets({
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
  },
  header: {
    textAlign: "center",
    marginBottom: "24px",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "16px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "16px",
  },
});

const Login: React.FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState("demo@example.com");
  const [password, setPassword] = useState("password123");
  const [username, setUsername] = useState("");
  const [pivotKey, setPivotKey] = useState<string>("login");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // login(email, password);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // register(username, email, password);
  };

  const handlePivotChange = (item?: PivotItem) => {
    if (item) {
      setPivotKey(item.props.itemKey as string);
    }
  };

  return (
    <div className={classNames.container}>
      <div className={classNames.header}>
        <div className={classNames.logo}>
          <UtensilsCrossed size={48} color="#d83b01" />
        </div>
        <Text variant="xLarge" block>
          Indian Cuisine Explorer
        </Text>
        <Text variant="medium">
          Discover the rich flavors of Indian cuisine
        </Text>
      </div>

      <Pivot selectedKey={pivotKey} onLinkClick={handlePivotChange}>
        <PivotItem headerText="Login" itemKey="login">
          <form onSubmit={handleLogin} className={classNames.form}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(_, newValue) => setEmail(newValue || "")}
              required
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(_, newValue) => setPassword(newValue || "")}
              required
              canRevealPassword
            />

            {/* {error && pivotKey === "login" && (
              <MessageBar messageBarType={MessageBarType.error}>
                {error}
              </MessageBar>
            )} */}

            <div className={classNames.buttons}>
              <DefaultButton text="Back" onClick={() => router.push("/")} />
              <PrimaryButton
                text={"Login"}
                type="submit"
                disabled={false}
                iconProps={false ? { iconName: "Spinner" } : undefined}
              />
            </div>

            <Text style={{ textAlign: "center", marginTop: 12 }}>
              Demo credentials are pre-filled for your convenience
            </Text>
          </form>
        </PivotItem>

        <PivotItem headerText="Register" itemKey="register">
          <form onSubmit={handleRegister} className={classNames.form}>
            <TextField
              label="Username"
              value={username}
              onChange={(_, newValue) => setUsername(newValue || "")}
              required
            />
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(_, newValue) => setEmail(newValue || "")}
              required
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(_, newValue) => setPassword(newValue || "")}
              required
              canRevealPassword
            />

            {/* {error && pivotKey === "register" && (
              <MessageBar messageBarType={MessageBarType.error}>
                {error}
              </MessageBar>
            )} */}

            <div className={classNames.buttons}>
              <DefaultButton text="Back" onClick={() => router.push("/")} />
              <PrimaryButton
                text={"Register"}
                type="submit"
                disabled={false}
                iconProps={false ? { iconName: "Spinner" } : undefined}
              />
            </div>
          </form>
        </PivotItem>
      </Pivot>
    </div>
  );
};

export default Login;
