import { render } from '@testing-library/react';

import Icon169 from './icon169';

describe('Icon169', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon169 />);
    expect(baseElement).toBeTruthy();
  });
});
