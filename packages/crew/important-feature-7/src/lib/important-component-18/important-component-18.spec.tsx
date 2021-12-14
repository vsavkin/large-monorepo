import { render } from '@testing-library/react';

import ImportantComponent18 from './important-component-18';

describe('ImportantComponent18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent18 />);
    expect(baseElement).toBeTruthy();
  });
});
