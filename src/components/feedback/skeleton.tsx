import { Box } from '@styled/jsx';

export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  speed?: string;
  borderRadius?: string | number;
  backgroundColor?: string;
}

export const Skeleton = ({
  width = '100px',
  height = '20px',
  speed = '1.5s',
  borderRadius = '24px',
  backgroundColor,
}: SkeletonProps) => {
  return (
    <Box
      style={{ width, height, borderRadius, backgroundColor }}
      bg="neutral.tertiary"
      overflow="hidden"
      position="relative"
      _dark={{ bg: 'surface.primary' }}
    >
      <Box
        style={{
          animation: `slideRight ${speed} infinite ease-in-out`,
        }}
        w="full"
        h="full"
        position="absolute"
        top={0}
        left="-50%"
        transform="skewX(-20deg)"
        backgroundImage={`linear-gradient(90deg, transparent,rgba(0, 0, 0, .1), transparent)`}
        _dark={{ backgroundImage: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent)' }}
      />
    </Box>
  );
};
