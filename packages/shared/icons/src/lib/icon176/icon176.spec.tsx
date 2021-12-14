import { render } from '@testing-library/react';

import Icon176 from './icon176';

describe('Icon176', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon176 />);
    expect(baseElement).toBeTruthy();
  });
});
