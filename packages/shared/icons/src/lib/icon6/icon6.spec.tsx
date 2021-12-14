import { render } from '@testing-library/react';

import Icon6 from './icon6';

describe('Icon6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon6 />);
    expect(baseElement).toBeTruthy();
  });
});
