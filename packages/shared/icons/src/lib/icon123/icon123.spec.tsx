import { render } from '@testing-library/react';

import Icon123 from './icon123';

describe('Icon123', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon123 />);
    expect(baseElement).toBeTruthy();
  });
});
