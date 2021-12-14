import { render } from '@testing-library/react';

import Icon200 from './icon200';

describe('Icon200', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon200 />);
    expect(baseElement).toBeTruthy();
  });
});
