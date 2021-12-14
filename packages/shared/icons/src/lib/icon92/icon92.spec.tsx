import { render } from '@testing-library/react';

import Icon92 from './icon92';

describe('Icon92', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon92 />);
    expect(baseElement).toBeTruthy();
  });
});
