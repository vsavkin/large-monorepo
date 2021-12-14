import { render } from '@testing-library/react';

import ImportantComponent97 from './important-component-97';

describe('ImportantComponent97', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent97 />);
    expect(baseElement).toBeTruthy();
  });
});
