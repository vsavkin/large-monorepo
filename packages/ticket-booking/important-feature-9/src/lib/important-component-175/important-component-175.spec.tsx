import { render } from '@testing-library/react';

import ImportantComponent175 from './important-component-175';

describe('ImportantComponent175', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent175 />);
    expect(baseElement).toBeTruthy();
  });
});
