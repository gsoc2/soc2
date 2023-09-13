import { beforeEach, vi } from "vitest";
import { mockDeep, mockReset } from "vitest-mock-extended";

import type { PrismaClient } from "@soc2/prisma";

vi.mock("@soc2/prisma", () => ({
  default: prisma,
  prisma,
  availabilityUserSelect: vi.fn(),
  userSelect: vi.fn(),
}));

beforeEach(() => {
  mockReset(prisma);
});

const prisma = mockDeep<PrismaClient>();
export default prisma;