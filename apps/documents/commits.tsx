import ReactPDF from "@react-pdf/renderer";

// Utility Seals Buffers
import {
  getBufferSeals,
  TypeSeals,
  type TypeSealsKey,
} from "~/pdf/utility/buffer-seals";

import "konva/canvas-backend";
import "~/pdf/utility/register-fonts";

import React, { Fragment } from "react";
import { Document, Link, View } from "@react-pdf/renderer";
import { type ComponentMap, fromString } from "~/lib/node.factory";

import { Table, Row, Cell, Header, Footer } from "~/pdf/components/table";
import { Indent, Paginate, Section } from "~/pdf/components/section";
import {
  BulletText,
  Text,
  Bold,
  Italic,
  S,
  Paragraph,
  Title,
} from "~/pdf/components/text";

// Complex Component
import Cover from "~/pdf/components/cover";
import { BorderDecoration } from "~/pdf/components/border";
import { VerticalLetter } from "~/pdf/components/cover/vertical-letter";
import IndicatorHeader from "~/pdf/components/cover/indicator-header";

// Sign Component
import {
  Section as SignSection,
  SignMeLeft,
  SignMeRight,
  Pad as SignPad,
  Row as SignRow,
  PadLeft as SignPadLeft,
  PadRight as SignPadRight,
} from "~/pdf/components/signs/sign-components";

const commits = await Bun.file("./commits.json").json();

const getLongDate = (from: string) => {
  // Convert the ISO string into a standard Date object
  const date = new Date(from);

  // Format to long Spanish style
  const formatter = new Intl.DateTimeFormat("es-ES", { dateStyle: "long" });
  return formatter.format(date);
};

const buffers = await getBufferSeals({
  seal: "blue",
});
const doc = (
  <Document
    subject="Informe Ejecutivo"
    title="Gestion de Cambios Realizados"
    author="Joan Andrés Buriticá Salazar"
    keywords="Act, Meet, Compromises, Report"
    creator="Joan Andrés Buriticá Salazar"
    producer="React PDF with Bun"
    language="es"
  >
    <Cover
      type="Informe Ejecutivo"
      title="Gestion de Cambios Realizados"
      month="Octubre 2026"
      {...buffers}
    />

    <Paginate>
      <IndicatorHeader value="Ing. Joan A. Buriticá" />

      <Section>
        <Title size="xs" textAlign="left">
          Propósito del Informe
        </Title>
        <Paragraph>
          Este informe ejecutivo de gestión corresponde al periodo comprendido
          entre {getLongDate(commits.from)} y {getLongDate(commits.to)}, y se
          presenta en cumplimiento de lo establecido en la CLÁUSULA QUINTA del
          contrato de prestación de servicios. A continuación, se detallan las
          actividades clave realizadas y los avances logrados durante el mes.
        </Paragraph>

        <Title size="xs" textAlign="left">
          Introducción a la Sección de Commits
        </Title>
        <Paragraph>
          La sección "Avance Técnico y Detalle de Actividades" incluye un
          registro pormenorizado de las modificaciones y adiciones realizadas al
          código fuente del proyecto, las cuales se presentan mediante una lista
          de commits (o "confirmaciones de cambios"). Es importante tener en
          cuenta que, por estándar técnico, las descripciones de estos commits
          se manejan en inglés técnico.
        </Paragraph>

        <Title size="xs" textAlign="left">
          Explicación de los Enlaces y Hashes
        </Title>
        <Paragraph>
          Cada commit en el listado está asociado a un identificador único (un
          código alfanumérico llamado Hash) y un enlace directo. El propósito de
          esta información es proveer una total trazabilidad y transparencia del
          trabajo realizado. Al hacer clic en el enlace adjunto a cada cambio,
          el lector puede ser dirigido directamente a la plataforma de control
          de versiones del proyecto, donde podrá visualizar exactamente qué
          líneas de código fueron añadidas, modificadas o eliminadas, validando
          de forma objetiva la ejecución del trabajo reportado.
        </Paragraph>
      </Section>

      <Section wrap={true}>
        <Title size="xs" textAlign="left">
          Avance Técnico y Detalle de Actividades
        </Title>
        {commits.commits.map((it) => (
          <View key={it.hash}>
            <Text>
              <Link
                style={{
                  textDecoration: "none",
                  color: "#000",
                }}
                href={`https://github.com/ResiduosAmbientales/Ambientales/commit/${it.hash}`}
              >
                <Bold>{it.hash.slice(0, 5).toUpperCase()}</Bold>
              </Link>{" "}
              - {it.message}
            </Text>
            <Text
              fontWeight="semibold"
              size="xs"
              opacity={0.6}
              textAlign="left"
            >
              Realizado: {getLongDate(it.date)}
            </Text>
          </View>
        ))}
      </Section>

      <SignSection hiddenTitle={false}>
        <SignRow>
          <SignMeLeft {...buffers} />
          <SignMeRight />
        </SignRow>
      </SignSection>
    </Paginate>
  </Document>
);
ReactPDF.render(doc, "output.pdf");
