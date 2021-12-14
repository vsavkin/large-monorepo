import { render } from '@testing-library/react';

import Icon104 from './icon104';

describe('Icon104', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon104 />);
    expect(baseElement).toBeTruthy();
  });
});
