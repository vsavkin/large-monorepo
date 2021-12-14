import { render } from '@testing-library/react';

import Icon133 from './icon133';

describe('Icon133', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon133 />);
    expect(baseElement).toBeTruthy();
  });
});
