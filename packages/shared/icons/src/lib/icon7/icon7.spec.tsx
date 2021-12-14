import { render } from '@testing-library/react';

import Icon7 from './icon7';

describe('Icon7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon7 />);
    expect(baseElement).toBeTruthy();
  });
});
