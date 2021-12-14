import { render } from '@testing-library/react';

import Component76 from './component76';

describe('Component76', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component76 />);
    expect(baseElement).toBeTruthy();
  });
});
