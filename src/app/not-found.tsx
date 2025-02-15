"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Row, Column, Container } from "@/components/PageLayout";
import Card from "@/components/Card";

export default function NotFound() {
  const router = useRouter();
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count === 0) {
      router.push("/");
      return;
    }

    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, router]);

  return (
    <Container>
      <Row justify="center" align="center" style={{ minHeight: "100vh" }}>
        <Column width={12} className="text-align-center">
          <Card className="zoomUp p-4">
            <h1>404 - Page Not Found</h1>
            <p>Redirecting to home page in {count}...</p>
          </Card>
        </Column>
      </Row>
    </Container>
  );
}
