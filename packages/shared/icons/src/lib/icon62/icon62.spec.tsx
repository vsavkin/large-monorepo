import { render } from '@testing-library/react';

import Icon62 from './icon62';

describe('Icon62', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon62 />);
    expect(baseElement).toBeTruthy();
  });
});
