import { render } from '@testing-library/react';

import Icon44 from './icon44';

describe('Icon44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon44 />);
    expect(baseElement).toBeTruthy();
  });
});
