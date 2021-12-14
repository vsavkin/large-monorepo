import { render } from '@testing-library/react';

import ImportantComponent99 from './important-component-99';

describe('ImportantComponent99', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent99 />);
    expect(baseElement).toBeTruthy();
  });
});
